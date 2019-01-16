module.exports = {
  siteMetadata: {
    title: `Raúl Ojeda's personal site`,
    indexTitle: 'Raúl Ojeda',
    description: `Raúl Ojeda's personal site. Look my dev profile, where I've worked and my personal projects. Contact/Hire me`,
    keywords: 'dev, javascript, ruby on rails, react, angular, node, frontend, backend, web, developer, scrum master, full stack',
    themeColor: '#318ada',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `70`,
              icon: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        ignore: [
          `src/css/main.css`
        ],
        whitelistPatterns: [/^bg-/],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Raúl Ojeda's personal site",
        short_name: "Raul Ojeda",
        start_url: "/",
        background_color: "#318ada",
        theme_color: "#318ada",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
