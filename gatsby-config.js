module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Joscha Bauer - Portfolio",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Joscha Bauer - Portfolio",
        short_name: "Joscha Bauer",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        start_url: "/",
        icon: "./src/images/favicon.ico" 
      }
    },
  ],
};
