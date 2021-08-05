import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navgroups } from './Navgroups'

const variants = {
  open: {
    x: 0,
    transition: { duration: 0.2 }
  },
  closed: {
    x: -160,
    transition: { duration: 0.2, delay: 0.5 }
  }

}


export default function Navbar() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div className="nav-container"
        initial={{x: -160}}
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        transition={{duration: 0.2}}
      >
        <Navgroups />
      </motion.div>
    </motion.nav>
  )
}
