const faHashtag = require("@fortawesome/free-solid-svg-icons/faHashtag");

module.exports = {
  siteMetadata: {
    title: `Tyler Benfield`,
    description: `Personal blog of Tyler Benfield.`,
    author: `Tyler Benfield`,
    siteUrl: `https://tylerbenfield.me`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hashtag" class="svg-inline--fa fa-hashtag fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="${faHashtag.svgPathData}" fill="currentColor" /></svg>`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tyler Benfield's personal blog`,
        short_name: `Tyler Benfield`,
        start_url: `/`,
        background_color: `#607D8B`,
        theme_color: `#607D8B`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges
                .filter(({ node }) => node.frontmatter.path.startsWith("/blog"))
                .map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    custom_elements: [{ "content:encoded": edge.node.html }],
                    date: edge.node.frontmatter.date,
                    description: edge.node.frontmatter.spoiler,
                    guid:
                      site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  });
                });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/(/pages/blog)/.*.md$/" } }
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        date
                        path
                        title
                        spoiler
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Tyler Benfield's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-81673230-3`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
