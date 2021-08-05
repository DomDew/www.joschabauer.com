import React, { useState } from 'react'
import backgroundCropped from '../images/background-cropped-1920-300dpi.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import LogoSpinner from './LogoSpinner'

export default function Background(props) {
  const [isLoading, setIsLoading] = useState(true)
  const backgroundLoaded = () => {
    setIsLoading(false)
  }

  return (
    <div className="main-container" >
      <AnimatePresence exitBeforeEnter>
      {isLoading ? <LogoSpinner /> : null }
      <motion.img
        style={isLoading ? {display: 'none'} : {display: 'block'} }
        initial={{opacity: 0}}
        animate={{opacity: 0.8}}
        exit={{opacity: 0}}
        transition={{duration: 3}}
        className="background-image" 
        src={backgroundCropped} alt=""
        onLoad={backgroundLoaded}
      />
      </AnimatePresence>
    </div>
  )
}
