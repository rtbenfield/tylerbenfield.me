const path = require(`path`);
const blogPostTemplate = path.resolve("src/templates/blog-post.jsx");
const projectTemplate = path.resolve("src/templates/project.jsx");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: getComponent(node),
      context: {}, // additional data can be passed via context
    });
  });
};

function getComponent(node) {
  if (node.frontmatter.path.startsWith("/blog/")) {
    return blogPostTemplate;
  } else if (node.frontmatter.path.startsWith("/projects/")) {
    return projectTemplate;
  } else {
    throw new Error(`Component not found for path ${node.path}`);
  }
}
