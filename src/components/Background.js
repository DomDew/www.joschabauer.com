import React from 'react'
import backgroundCropped from '../images/background-cropped-1920-300dpi.jpg'
import { motion } from 'framer-motion'

export default function Background() {
  return (
    <div className="main-container" >
      <motion.img 
        initial={{scale: 1}}
        animate={{scale: 1.1}}
        transition={{duration: 10}}
        className="background-image" 
        src={backgroundCropped} alt="" 
      />
    </div>
  )
}
