import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { date, spoiler, title } = frontmatter;
  return (
    <Layout>
      <SEO description={spoiler} title={title} />
      <article>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        spoiler
        title
      }
    }
  }
`;

export default BlogPostTemplate;
