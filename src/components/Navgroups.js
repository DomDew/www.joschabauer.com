import * as React from "react";
import { motion } from "framer-motion";
import logo from '../images/logo.png'
import { Link } from 'gatsby'

const groupVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 }
    }
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const itemVariants = {
  open: {
    transition: { staggerChildren: 0.3, delayChildren: 0.3 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navgroups = () => (
  <motion.div className="nav-animator" variants={itemVariants}>
    <motion.img variants={groupVariants} className="nav-logo" src={logo} alt="White scribbles" />
      <motion.header variants={groupVariants} className="nav-description">
        <p>print,</p>
        <p>audio &</p>
        <p>video</p>
        <p>design</p>
      </motion.header>
      <motion.div variants={groupVariants} className="socials">
        <a className="nav-link" href="https://www.instagram.com/joschabauer__" target="_blank" rel="noreferrer">instagram</a>
        <a className="nav-link" href="https://joschabauer.bandcamp.com" target="_blank" rel="noreferrer">bandcamp</a>
        <a className="nav-link" href="https://www.vimeo.com/joschabauer" target="_blank" rel="noreferrer">vimeo</a>
      </motion.div>
      <motion.div variants={groupVariants} className="contact">
        <a className="nav-link" href="mailto:info@joschabauer.com">contact</a>
      </motion.div>
      <motion.div variants={groupVariants} className="imprint">
        <Link className="nav-link" to="/privacy">privacy</Link>{" "}
        <Link className="nav-link" to="/imprint">imprint</Link>
      </motion.div>
  </motion.div>
);