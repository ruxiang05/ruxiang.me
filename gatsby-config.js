module.exports = {
  siteMetadata: {
    title: `Ruxandra Anghel`,
    description: `Ruxandra Anghel's personal website`,
    author: `Ruxandra Anghel`,
  },
  plugins: [
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
    `gatsby-plugin-sass`
  ],
}
