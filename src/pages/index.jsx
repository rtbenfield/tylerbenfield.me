import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Tyler Benfield</h1>
    <p>
      Hi, I’m Tyler Benfield. I’m currently a softawre developer at{" "}
      <a href="https://www.sentryone.com/">SentryOne</a>. I completed my
      Bachelor’s degree at Wingate University and my Master’s in Georgia Tech’s{" "}
      <a href="http://www.omscs.gatech.edu/">OMSCS</a> program. I started this
      blog to catalog the things I learn as I continue to discover more concise
      and efficient ways to write code and build complex systems. If you’re
      interested in my skillsets, check out my resumé. If you’re interested in
      my projects, check out my Github page.
    </p>
  </Layout>
);

export default IndexPage;
