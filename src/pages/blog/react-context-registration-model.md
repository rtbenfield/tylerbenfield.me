---
path: "/blog/react-context-registration-model"
date: "2019-09-05"
title: "React Context Registration Model"
spoiler: "React Context is often used to pass values down the component tree, but some powerful APIs can be made by passing values up instead."
---

React Context is often used to pass values down a component tree and, among other things, avoid prop drilling.
Something I haven't seen it used for much, however, is passing values back up.
It turns out there are some elegant APIs that can be built by using Context in situations that may not seem obvious at first.

## Schema Building

How many times have you been working with a component that has requires a large object for configuration?
Scenarios that immediately come to my mind are things like a data table or chart configuration that require have nested configuration options.
For some reason, building these large objects in React components just doesn't feel natural or right to me.
It feels like going back to the jQuery days of `$(selector).doSomeCoolStuff({ blah blah blah })`.
After having implemented one of these APIs myself I wanted to find a better way, and Context is a perfect fit.

Context is a very primitive API that is unopinionated about *what* the value is that you are passing down.
That value can be some state you want to share among that component tree, but it could just as well be an object with various functions attached.
Those functions can be a way for consumers to reach back up to the parent and provide it with information about what the child would like to do.
You might say that's bad practice and the child should not be aware of its parent, and in most cases it is,
but any context consumer is inherently aware that is must be under a provider.

With that concept in mind, let's rethink our big configuration object example.
I usually like to start by thinking about what the API surface (props) of my component look like.
Maybe we have a component that displays charts like this:

```js
const MyApp = () => {
  return (
    <Chart
      data={data}
      charts={[
        {
          color: "blue",
          dataKey: "value1",
          plotPoints: "hover",
          tooltip: {
            formatter: v => formatValue(v),
          },
          type: "line",
        },
        {
          color: "red",
          dataKey: "value2",
          plotPoints: "hover",
          tooltip: {
            formatter: v => formatValue(v),
          },
          type: "line",
        },
      ]}
    />
  );
};
```

This is a pretty small example, but you can imagine how much more complex it gets as the number of options increases.
What would this API look like if were more component-based?
We might have something more like this:

```js
const MyApp = () => {
  return (
    <Chart data={data}>
      <LineChart
        color="blue"
        dataKey="value1"
        plotPoints="hover"
        tooltip={{
          formatter: v => formatValue(v),
        }}
      />
      <LineChart
        color="red"
        dataKey="value2"
        plotPoints="hover"
        tooltip={{
          formatter: v => formatValue(v),
        }}
      />
    </Chart>
  );
};
```

Doesn't that read better? Well, maybe that's a matter of preference, but it does open the door for some pretty powerful reusability.
If all of the configuration "parts" are components, nothing is stopping us from using other tools React gives us with components.
We might define a reusable `LineChart` configuration like this:

```js
const MyLineChart = (props) => {
  return (
    <LineChart
      color="blue"
      plotPoints="hover"
      tooltip={{
        formatter: v => formatValue(v),
      }}
      {...props}
    />
  );
};

const MyApp = () => {
  return (
    <Chart data={data}>
      <MyLineChart dataKey="value1" />
      <MyLineChart color="red" dataKey="value2" />
    </Chart>
  );
};
```

We could even tie it into other things, like Context, to use themes or translations:

```js
const MyLineChart = (props) => {
  const { formatValue } = useLocalizationContext();
  const { getChartColor } = useTheme();
  return (
    <LineChart
      color={getChartColor(props.dataKey)}
      plotPoints="hover"
      tooltip={{
        formatter: v => formatValue(v),
      }}
      {...props}
    />
  );
};

const MyApp = () => {
  return (
    <Chart data={data}>
      <MyLineChart dataKey="value1" />
      <MyLineChart dataKey="value2" />
    </Chart>
  );
};
```

This is only scratching the surface!
You have all the power of React components at your disposal!
That includes things like effects and state.

Cool! But how? Of course the answer is Context!

Let's start with our Context definition.
The Context will stay as internal knowledge to our chart module.
That means it won't be evident at all in using our API, which will keep things nice and clean.
We're also going to create a custom provider component that will provide the functions we need and manage the state.
What state do we have? Take a look:

```js
const chartContext = React.createContext();

export const ChartContextProvider = ({ children }) => {
  const [charts, setCharts] = React.useState([]);

  const registerChart = React.useCallback((chart) => {
    // Make up a random ID for this chart object and return it for unregistering later
    const id = Math.random();
    setCharts(prev => [...prev, { ...chart, id }]);
    return id;
  }, []);

  const unregisterChart = React.useCallback((id) => {
    setCharts(prev => prev.filter(x => x.id !== id));
  }, []);

  // Build our actual context value object
  const value = React.useMemo(() => {
    return {
      charts,
      registerChart,
      unregisterChart,
    };
  }, [charts, registerChart, unregisterChart]);

  return (
    <chartContext.Provider value={value}>
      {children}
    </chartContext.Provider>
  );
};

// Convenience hook so that chartContext is not exposed outside this module
export function useChartContext() {
  const value = React.useContext(chartContext);
  if (!value) {
    // Oops! We tried to use a chart component (ex. LineChart) without wrapping it in a Chart
    throw new Error("Chart components cannot be used without Chart wrapper");
  }
  return value;
}
```

What good does this give us? Let's start using it in `Chart` and `LineChart`.

```js
export const Chart = ({ children, data }) => {
  return (
    <ChartContextProvider>
      {/* children will contain the LineChart instances */}
      {children}
      <ChartDisplay data={data} />
    </ChartContextProvider>
  );
};

export const LineChart = ({ color, dataKey, plotPoints, tooltip }) => {
  const { registerChart, unregisterChart } = useChartContext();

  // Any time one of the props changes, re-register the chart object definition
  React.useEffect(() => {
    const id = registerChart({
      color,
      dataKey,
      plotPoints,
      tooltip,
    });
    return () => unregisterChart(id);
  }, [color, dataKey, plotPoints, tooltip]);

  // LineChart doesn't actually render anything!
  return null;
};

const ChartDisplay = ({ data }) => {
  const { charts } = useChartContext();

  // TODO: Draw the actual chart using the `charts` object and `data`
};
```

That's all there is to it!
You might be wondering where the `ChartDisplay` component came from.
This is a component internal to our `Chart` module that is used to access the chart context value
and read the chart definitions supplied by `LineChart`.
It has to exist under the `ChartContextProvider` component tree, but no code outside of this module will ever know it exists.
It also provides a nice separation of concerns where each component has a designated responsibility.

Of course there are always "gotchas".
We should be cautious of the side effects of unregistering and registering the chart object each time a property changes and what that implies for `ChartDisplay`.
If you're options are changing frequently or dynamically, you may want a function to update an existing chart.
In that case, you can place the `id` in a React Ref for use in a separate `useEffect` hook that calls the update function.

## UI Controls

Another powerful way we can use the flexibility of Context is in communication between UI controls.
Say we want to build a component that displays a tab strip, manages the selected tab, and displays the selected tab's content.
Just like above, let's start with what we want the API surface to look like:

```js
const MyApp = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);
  return (
    <Tabs onChange={setSelectedTab} selectedTab={selectedTab}>
      <Tab tabKey={1} label="Profile">
        <Profile />
      </Tab>
      <Tab tabKey={2} label="Messages">
        <Messages />
      </Tab>
      <Tab tabKey={3} label="Friends">
        <Friends />
      </Tab>
    </Tabs>
  );
};
```

That seems simple, but how does the `Tabs` component know when our `Tab` is clicked?
We could have a prop on `Tab` for selected, but then we have to repeat it on each `Tab`, repeat the `setSelectedTab` for each `Tab`,
and ensure that there is no case where two tabs have `selected={true}` at the same time.
This feels like the right API, so let's use Context to make it happen!

```js
const tabContext = React.createContext();

const TabContextProvider = ({ children, onChange, selectedTab }) => {
  const [tabs, setTabs] = React.useState([]);

  const registerTab = React.useCallback((tab) => {
    setTabs(prev => [...prev, tab]);
  }, []);

  const unregisterTab = React.useCallback((tabKey) => {
    setTabs(prev => prev.filter(x => x.tabKey !== tabKey));
  }, []);

  // Build our actual context value object
  const value = React.useMemo(() => {
    return {
      registerTab,
      selectedTab,
      setSelectedTab: onChange,
      tabs,
      unregisterTab,
    };
  }, [onChange, registerTab, selectedTab, tabs, unregisterTab]);

  return (
    <tabContext.Provider value={value}>
      {children}
    </tabContext.Provider>
  )
};
// Convenience hook so that chartContext is not exposed outside this module
export function useTabContext() {
  const value = React.useContext(tabContext);
  if (!value) {
    // Oops! We tried to use a Tab component outside of Tabs
    throw new Error("Tab components cannot be used without Tabs wrapper");
  }
  return value;
}

const Tabs = ({ children, onChange, selectedTab }) => {
  return (
    <TabContextProvider onChange={onChange} selectedTab={selectedTab}>
      <TabDisplay />
      {children}
    <TabContextProvider>
  );
};

const Tab = ({ children, label, tabKey }) => {
  const { registerTab, unregisterTab, selectedTab } = useTabContext();

  React.useEffect(() => {
    registerTab({
      label,
      tabKey,
    });
    return () => unregisterTab(tabKey);
  }, [label, tabKey]);

  // Tab only renders children if it is selected
  if (selectedTab === tabKey) {
    return children;
  } else {
    return null;
  }
};

const TabDisplay = () => {
  const { tabs, selectedTab, setSelectedTab } = useTabContext();

  // TODO: Display tab strip using `tabs`
};
```

Notice how similar this was to the chart example.
This pattern can be used for a variety of situations with only a few minor adjustments.

The biggest "gotcha" here is we may want to consider adding some safeguards around tab ordering if our tab definitions will be changing.
Because of unregistering then registering to the end of the array, we may end up accidentally reordering tabs.
This could be solved with an `updateTab` option or an `order` prop, depending on how you prefer to handle it.

> Readers that have been deeper into React may wonder why we don't just map over the children with React's Children APIs.
> That's definitely a possibility, but enforces a lot of unnecessary limitations.
> The most annoying that I have encountered is that the children "inspection" is only one level deep,
> preventing you from wrapping your `Tab` components in other components or making reusable `Tab` components.
> Context, on the other hand, is agnostic of the component tree depth so long as a `Tab` component is eventually rendered.

## Wrapping Up

What can we take away from this? React Context is flexible, and can be used in ingenious ways to solve problems that were not easily solvable before.
Before you accept a suboptimal API for your component, consider if Context would help you get the API you want.
