---
path: "/blog/how-i-use-react-context"
date: "2020-10-03"
title: "How I use React Context"
spoiler: "Just a simple pattern I use for React Context that I've found useful."
---

React's [Context API](https://reactjs.org/docs/context.html) is extemely versatile and provides an excellent primitive for building on top of. That said, I've found that many experienced React developers are still looking for a pattern for using context that they like. I thought I'd share my approach, particularly for shared-state contexts.

```tsx
import * as React from "react";

// Define a type for the context result
// Note that the state is a field within this type and you need a container type with set functions
export interface MyContext {
  // You can have any number of fields here and any type
  someState: string;
  // Make sure to have a callback version if you need to compute from previous state
  setSomeState(value: string): void;
}

// I don't normally export context so that it can't be consumed outside of this file
// Also, add null or undefined here unless there is a reasonable default (typically not for shared-state)
const context = React.createContext<MyContext | null>(null);
// Be sure to set displayName for better debugging
context.displayName = "MyContext";

// Export a provider that sets up the shared state
export const MyContextProvider: React.FC = ({ children }) => {
  const [someState, setSomeState] = React.useState<string>("");
  const value: MyContext = {
    someState,
    setSomeState,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

// Export a hook to consume the context
// This is nice for controlling how the context is used
export function useMyContext(): MyContext {
  const value = React.useContext(context);
  // Check for null/undefined to see if provider was used
  if (!value) {
    // Throw an error to fail early if used improperly
    throw new Error(
      "useMyContext can only be used in a descendent of MyContextProvider",
    );
  } else {
    // value can't be null/undefined
    return value;
  }
}

// If needed, you can export a HOC or render prop (context.Consumer) version as well
// I typically avoid that and only use hooks unless absolutely necessary
```

That's it! I've got a few more tips to go along with this though.

First, avoid having multiple set functions that would typically be called back-to-back. Multiple state updates can less efficient and cause unnecessary rerenders. Instead, pull those kind of values into a single `useState` call and expose functions on the context for easily setting the values together. The API you expose on the context type does not have to be identical to `useState`, so play around and find an API that makes the most sense for your use case.

Second, take some time to learn about `useDispatch` and how it compares to `useState`. For more complex workflows or those that resemble state machines, you can expose a strongly-typed `dispatch` function on your context value instead of set functions. This can help address the multiple set calls from the previous tip while also preventing invalid states.

Finally, if your shared-state is typically set by a component that does not consume the value (a scenario I've found is rare), you can further optimize by having separate context instances for setters and getters. Kent C. Dodds has a great blog post on this called [How to use React Context Effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively). Kent's approach eliminates unnecessary rerenders in components that only need the setters and not the state values themselves.

I hope sharing my approach to using React Context for shared state has been helpful!
