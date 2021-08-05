import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ImprintCard from '../components/ImprintCard'

export default function Imprint() {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <ImprintCard />
      </AnimatePresence>
    </>
  )
}
