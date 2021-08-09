module.exports = {
  siteMetadata: {
    siteUrl: "https://www.joschabauer.com",
    title: "Joscha Bauer - Portfolio",
    description: "Joscha Bauer is a visual and audio designer / communicator. Delivering modern solutions for corporate and web design, he is a passionate artist as well. His art is an open invitation to reflect about what is perceived as beauty and what lies supressed within. While he feels at home in the world of digital and print designs, he also works with digital and analogue audio mediums."
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
        icon: "src/images/favicon.png"
      }
    },
  ],
};
