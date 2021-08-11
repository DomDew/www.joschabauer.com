import React from "react";
import { Helmet } from "react-helmet";

// COMPONENTS
import Background from "./Background";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      <Helmet htmlAttributes={{ lang: "en-GB" }}>
        <title>Portfolio | Joscha Bauer</title>
        <meta
          name="description"
          content="Joscha Bauer is a visual and audio designer / communicator. Delivering modern solutions for corporate and web design, he is a passionate artist as well. His art is an open invitation to reflect about what is perceived as beauty and what lies supressed within. While he feels at home in the world of digital and print designs, he also works with digital and analogue audio mediums."
        ></meta>
        <meta
          name="keywords"
          content="Joscha Bauer, visual design, audio design, web design, corporate design, corporate identity, art"
        />
        <meta name="author" content="Dominik Dewitz" />
      </Helmet>
      {children}
      <Navbar />
      <Background />
    </div>
  );
}
