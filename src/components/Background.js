import React, { useState } from 'react'
import backgroundCropped from '../images/background-cropped-1920-300dpi.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import LogoSpinner from './LogoSpinner'
import logo from '../images/logo.png'

export default function Background(props) {
  const [isLoading, setIsLoading] = useState(true)
  const backgroundLoaded = () => {
    setTimeout(function() {setIsLoading(false)}, 2000)
    console.log(isLoading)
  }

  return (
    <div className="main-container" >
      {console.log(isLoading)}
      <AnimatePresence exitBeforeEnter>
        {isLoading && <motion.img
        key="logo-spinner"
        className="logo-spinner"
        src={logo}
        animate={{opacity: [0, 1, 0], rotate: 360}}
        exit={{opacity: 0, y: 600}}
        transition={{
          times: [0, 0.5, 1],
          ease: 'easeInOut',
          duration: 2,
          loop: Infinity
        }}
      /> }
      </AnimatePresence>
      <motion.img
        style={isLoading ? {display: 'none'} : {display: 'block'} }
        initial={{opacity: 0}}
        animate={{opacity: 0.8}}
        transition={{duration: 3, delay: 2}}
        className="background-image" 
        src={backgroundCropped} alt=""
        onLoad={backgroundLoaded}
      />
    </div>
  )
}
