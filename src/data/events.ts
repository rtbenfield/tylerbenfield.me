export interface Event {
  title: string;
  titleHref: string;
  eventName: string;
  eventHref: string;
  date: string;
  description: string[];
  link?: {
    text: string;
    href: string;
  };
}

export const upcomingEvents: Event[] = [
  {
    title: "Leveraging Web APIs for Portable JavaScript Libraries",
    titleHref: "https://github.com/rtbenfield/talks-utahjs-2025",
    eventName: "UtahJS",
    eventHref: "https://utahjs.com/conference/",
    date: "September 12, 2025 in Sandy, Utah",
    description: [
      "Just how far can today's web APIs take us? JavaScript now offers APIs that handle data streams, manipulate buffers, and model state machines, yet they're often overlooked. These powerful tools might not show up in everyday development, but they lay the groundwork for building faster, more versatile libraries.",
      "In this session, we'll dive into what I've learned by creating a Postgres client that runs entirely on native web APIs. We'll discuss the challenges and trade-offs, and how it compares to traditional approaches. We'll also explore portability across environments like Node.js, Deno, Bun, and even browsers. Come see how far web capabilities can go and what this means for the future of the JavaScript ecosystem.",
      "This talk is designed for intermediate JavaScript developers, but developers of any experience level will learn something new. You'll discover powerful APIs built into JavaScript runtimes, learn tips for authoring more flexible libraries, and, as a bonus, see how database wire protocols work.",
    ],
  },
  {
    title: "Epic App Performance Starts with the Database",
    titleHref: "https://2025.allthingsopen.org/",
    eventName: "All Things Open",
    eventHref: "https://2025.allthingsopen.org/",
    date: "October 12-14, 2025 in Raleigh, North Carolina",
    description: [
      "Your app is only as fast as its slowest query.",
      "In this session, we'll explore the vital role database tuning plays in your app's user experience. You'll gain a pragmatic understanding of database indexing, learn which queries to avoid, and hear real stories from using these tips in the wild. Get ready to level up your database skills. When we're done, you'll be equipped to make your app performance epic.",
      "This talk is designed for software engineers looking to improve their knowledge of database performance fundamentals. You'll learn how to optimize databases with indexes and good query patterns backed by real-world examples. With these takeaways, you'll be empowered to improve your app's user experience while reducing the need to scale your database.",
    ],
  },
];

export const pastEvents: Event[] = [
  {
    title: "Epic App Performance Starts with the Database",
    titleHref:
      "https://github.com/rtbenfield/talks-kcdc-2025-epic-app-performance",
    eventName: "KCDC",
    eventHref: "https://www.kcdc.info/",
    date: "August 14-15, 2025 in Kansas City, Missouri",
    description: [
      "Your app is only as fast as its slowest query.",
      "In this session, we'll explore the vital role database tuning plays in your app's user experience. You'll gain a pragmatic understanding of database indexing and hear real stories from using these tips in the wild. Get ready to level-up your database skills. When we're done, you'll be equipped to make your app performance epic.",
    ],
  },
  {
    title: "Write Once, Stream Everywhere: Transforming Your Data into Events",
    titleHref:
      "https://github.com/rtbenfield/talks-kcdc-2025-write-once-stream-everywhere",
    eventName: "KCDC",
    eventHref: "https://www.kcdc.info/",
    date: "August 14-15, 2025 in Kansas City, Missouri",
    description: [
      "On this episode of \"things you didn't know your database could do”, we're going to power live updates, real-time notifications, change history, and more from data you already capture.",
      "We'll explore the power of change data capture for turning you database into an event hub for your app. We'll take a look how different databases approach the problem, then dive into PostgreSQL to see it in action. Spoiler: we're going to trick the database into replicating itself to code that we control, making every change in the database available to our app. As crazy as that sounds, it's actually a proven, reliable solution with several tools available to implement it for us. We'll take a look at those too so you can start building database event driven apps today.",
      "By the end of this talk, you'll understand the benefits of change data capture, learn how to implement it through logical replication, and put it into practice in your app to power all your event-driven workflows.",
    ],
  },
  {
    title: "Write Once, Stream Everywhere: Transforming Your Data into Events",
    titleHref:
      "https://rvatech.com/rvatech-events/2024-rvatech-code-cloud-conference/",
    eventName: "rvatech/ Code & Cloud",
    eventHref:
      "https://rvatech.com/rvatech-events/2024-rvatech-code-cloud-conference/",
    date: "Nov 21, 2024 in Richmond, Virginia",
    description: [
      "On this episode of \"things you didn't know your database could do\", we're going to power live updates, real-time notifications, change history, and more from data you already capture.",
      "We'll explore the power of change data capture for turning you database into an event hub for your app. We'll take a look how different databases approach the problem, then dive into PostgreSQL to see it in action. Spoiler: we're going to trick the database into replicating itself to code that we control, making every change in the database available to our app. As crazy as that sounds, it's actually a proven, reliable solution with several tools available to implement it for us. We'll take a look at those too so you can start building database event driven apps today.",
      "By the end of this talk, you'll understand the benefits of change data capture, learn how to implement it through logical replication, and see how to put it into practice in your app to power all your event-driven workflows.",
    ],
  },
  {
    title: "Write Once, Stream Everywhere: Transforming Your Data into Events",
    titleHref: "https://devignition.com/",
    eventName: "DevIgnition",
    eventHref: "https://devignition.com/",
    date: "Nov 7, 2024 in Alexandria, Virginia",
    description: [
      "On this episode of \"things you didn't know your database could do\", we're going to power live updates, real-time notifications, change history, and more from data you already capture.",
      "We'll explore the power of change data capture for turning you database into an event hub for your app. We'll take a look how different databases approach the problem, then dive into PostgreSQL to see it in action. Spoiler: we're going to trick the database into replicating itself to code that we control, making every change in the database available to our app. As crazy as that sounds, it's actually a proven, reliable solution with several tools available to implement it for us. We'll take a look at those too so you can start building database event driven apps today.",
      "By the end of this talk, you'll understand the benefits of change data capture, learn how to implement it through logical replication, and see how to put it into practice in your app to power all your event-driven workflows.",
    ],
  },
  {
    title: "Epic App Performance Starts with the Database",
    titleHref:
      "https://www.epicweb.dev/talks/epic-app-performance-starts-with-the-database",
    eventName: "Epic Web Conf",
    eventHref: "https://www.epicweb.dev/conf/2024",
    date: "April 11, 2024 in Park City, Utah",
    description: [
      "Your app is only as fast as its slowest query.",
      "In this session, we'll explore the vital role database tuning plays in your app's user experience. You'll gain a pragmatic understanding of database indexing and hear real stories from using these tips in the wild. Get ready to level-up your database skills. When we're done, you'll be equipped to make your app performance epic.",
    ],
    link: {
      text: "Watch the Talk",
      href: "https://www.epicweb.dev/talks/epic-app-performance-starts-with-the-database",
    },
  },
];
