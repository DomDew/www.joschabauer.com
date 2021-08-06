import { AnimatePresence } from 'framer-motion'
import React from 'react'
import PrivacyCard from '../components/PrivacyCard'
import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <PrivacyCard />
      </AnimatePresence>
    </>
  )
}
