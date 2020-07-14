module.exports = {
  siteMetadata: {
    title: `About Ankit Gupta`,
    description: `Resume of Technologist with over 13 years of experience`,
    author: `Ankit Gupta`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
