import React from 'react'

// COMPONENTS
import Background from './Background'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="main-wrapper">
      { children }
      <Navbar />
      <Background />
    </div>
  )
}
