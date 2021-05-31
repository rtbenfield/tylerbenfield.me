import React from "react";
import Layout from "./layout";
import SEO from "./seo";

export function BlogLayout({ children, metadata }) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
    year: "numeric",
  });
  return (
    <Layout>
      <SEO description={metadata.spoiler} title={metadata.title} />
      <article>
        <header>
          <h1>{metadata.title}</h1>
          <small>{formatter.format(metadata.date)}</small>
        </header>
        {children}
      </article>
    </Layout>
  );
}
