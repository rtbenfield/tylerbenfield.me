import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hi, I'm Tyler Benfield. I'm a full-stack developer, coding enthusiast, and
      occasional mechanic.
    </h1>
    <p>
      I was born, raised, and still live in the Charlotte, NC area. I love it
      here and can't imagine living anywhere else, but we'll see where life
      takes me! Since I was a kid I've always liked building things.
      Unfortunately that's an expensive hobby, but luckily I found code early on
      and discovered I could build as much as I wanted! That turned into a
      career and now I get to genuinely enjoy going to work every day. Even
      better, the learning never stops and I've gotten to meet some great people
      along the way. If you're passionate about software development like me,
      I'd love to hear from you!
    </p>
  </Layout>
);

export default IndexPage;
