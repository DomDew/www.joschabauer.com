import React from 'react'
import { motion } from 'framer-motion'
import logo from '../images/logo.png'

export default function LogoSpinner() {
  return (
      <motion.img
        className="logo-spinner"
        src={logo}
        animate={{opacity: [0, 1, 0], rotate: 360}}
        exit={{opacity: 0, y: -600}}
        transition={{
          times: [0, 0.5, 1],
          ease: 'easeInOut',
          duration: 2,
          loop: Infinity
        }}
      />
  )
}
