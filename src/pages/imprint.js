import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import ImprintCard from '../components/ImprintCard'

export default function Imprint() {
  return (
    <>
      <Navbar />
      <Background initial={false} />
      <AnimatePresence exitBeforeEnter>
        <ImprintCard />
      </AnimatePresence>
    </>
  )
}
