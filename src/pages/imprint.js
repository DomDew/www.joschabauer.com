import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Imprint from '../components/ImprintCard'

export default function ImprintPath() {
  return (
    <>
      <Navbar />
      <Background />
      <AnimatePresence exitBeforeEnter>
        <Imprint />
      </AnimatePresence>
    </>
  )
}
