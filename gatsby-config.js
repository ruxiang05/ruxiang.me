module.exports = {
  siteMetadata: {
    title: 'Ruxandra Anghel',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    }
  ]
}
