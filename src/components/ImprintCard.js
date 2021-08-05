import React from 'react'
import { motion } from 'framer-motion'
import { Link } from '@reach/router'

export default function ImprintCard() {
  return (
    <motion.div 
      className="card-container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Link className="cross-redirect" to="/">
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="3.0923" y1="2.97195" x2="19.0923" y2="19.972" stroke="white" strokeWidth="3"/>
        <line x1="2.9077" y1="19.972" x2="18.9077" y2="2.97195" stroke="white" strokeWidth="3"/>
        </svg>
      </Link>
      <p className="card-text">Mail: info@joschabauer.com <br />
        Phone: +49 (0) 176 557 863 91 <br />
        Adress: Marschnerstr. 41, <br />30167 Hannover </p>
    </motion.div>
  )
}
