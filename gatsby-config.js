module.exports = {
  siteMetadata: {
    title: 'Ruxandra Anghel',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
  ],
};
