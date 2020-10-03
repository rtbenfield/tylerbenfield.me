import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import LinkList from "../components/linkList";
import SEO from "../components/seo";

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { github, link, spoiler, title, vscodeMarketplace } = frontmatter;
  return (
    <Layout>
      <SEO description={spoiler} title={title} />
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <LinkList
          github={github}
          link={link}
          title={title}
          vscodeMarketplace={vscodeMarketplace}
        />
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
        link
        # github
        path
        spoiler
        title
        # vscodeMarketplace
      }
    }
  }
`;

export default ProjectTemplate;
