import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Typography from "../../components/typography";

const BlogIndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Blog" />
      <Typography variant="h1">Blog</Typography>
      {posts.map(({ node }, i) => (
        <React.Fragment key={node.frontmatter.path}>
          {i > 0 && <hr />}
          <article>
            <header>
              <Typography variant="h2">
                <Link to={node.frontmatter.path} rel="bookmark">
                  {node.frontmatter.title}
                </Link>
              </Typography>
              <small>
                {node.frontmatter.date} - {node.timeToRead} min read
              </small>
            </header>
            <p dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} />
          </article>
        </React.Fragment>
      ))}
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
            date(formatString: "MMMM DD, YYYY")
            path
            title
            spoiler
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogIndexPage;
