import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Privacy from '../components/PrivacyCard'

export default function PrivacyPath() {
  return (
    <>
      <Navbar />
      <Background />
      <AnimatePresence exitBeforeEnter>
        <Privacy />
      </AnimatePresence>
    </>
  )
}
