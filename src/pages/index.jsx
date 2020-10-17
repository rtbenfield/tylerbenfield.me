import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! I'm Tyler and I like to build things.</h1>
    <p>
      I've been interested in computers since I was a kid and started learning
      to code when I was 13 years old. Nothing big or amazing, but I was blown
      away at how the computer responded to the code I wrote. It still amazes me
      today and it's even more incredible that the things I build are used by so
      many people; people I've never even met.
    </p>

    <p>
      Throughout my career I've worked with many different languages,
      frameworks, and libraries. I am always exploring new options not only to
      stay in-the-know, but because every new thing was made to solve a problem
      that wasn't solved by the current options. While I may never use the cool
      new thing in a real app, I will learn some concepts I can take back to the
      approaches I do use. That said, there are a few technologies that have
      captured my attention the most.
    </p>

    <p>
      One of the technologies (framework? library? debate me on this) that I
      specialize in is React. I've been doing React development since early
      2016. That back before it was cool to mix HTML, CSS, and JS, we used
      Browserify and require instead of Webpack and import, and all our
      components were 😲classes (for some of us, they were even
      React.createClass). React has come a long way since then, and I've enjoyed
      being part of it.
    </p>

    <p>
      I am also all-in on GraphQL. I've built GraphQL APIs in JS/TS and .NET
      (C#) mostly, but it's the tooling I find most interesting. Projects like
      GraphiQL, Apollo, and Dgraph showcase what can be done with a defined
      schema and spec-compliant introspection APIs. I've spent a considerable
      amount of time learning GraphQL, with my experience spanning from building
      layered backends with DataLoader to processing schema files for code
      generation.
    </p>

    <p>
      Some of the projects I am actively learning, but still relatively early
      in, are Deno, WebAssembly, and Rust. Deno is an incredibly fresh take on
      Node that I actively use for scripts and prototypes. In addition to
      opening new opportunities in web development, I think WebAssembly will
      provide a cross-platform runtime that will become the basis for future
      tooling. While Go is still my favorite language, Rust has a mind-blowing
      take on memory management that fits perfectly into WebAssembly.
    </p>

    <p>
      That's my story! At least the tech side of it. If you have similar
      interests I'd be thrilled to connect with you.
    </p>
  </Layout>
);

export default IndexPage;
