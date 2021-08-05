import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import PrivacyCard from '../components/PrivacyCard'

export default function Privacy() {
  return (
    <>
      <Navbar />
      <Background initial={false} />
      <AnimatePresence exitBeforeEnter>
        <PrivacyCard />
      </AnimatePresence>
    </>
  )
}
