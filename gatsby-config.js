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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-81673230-3`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
};
