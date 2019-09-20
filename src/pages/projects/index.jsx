import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import LinkList from "../../components/linkList";
import SEO from "../../components/seo";
import Typography from "../../components/typography";

const ProjectsIndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.frontmatter.path.startsWith("/projects"),
  );
  return (
    <Layout>
      <SEO title="Projects" />
      <Typography variant="h1">Projects</Typography>
      {projects.map(({ node }, i) => {
        const { github, link, title, vscodeMarketplace } = node.frontmatter;
        return (
          <React.Fragment key={node.frontmatter.path}>
            {i > 0 && <hr />}
            <article>
              <header>
                <Typography variant="h2">
                  <Link to={node.frontmatter.path} rel="bookmark">
                    {node.frontmatter.title}
                  </Link>
                </Typography>
                <LinkList
                  github={github}
                  link={link}
                  title={title}
                  vscodeMarketplace={vscodeMarketplace}
                />
              </header>
              <p
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
            </article>
          </React.Fragment>
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            link
            github
            path
            spoiler
            title
            vscodeMarketplace
          }
        }
      }
    }
  }
`;

export default ProjectsIndexPage;
