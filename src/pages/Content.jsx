import React from 'react'
import { Hero2, Navbar, Footer } from '../components'

const Content = (props) => {
  return (
    <>
      <Navbar />
      <Hero2 {...props}/>
      <Footer />
    </>
  )
}

export default Content
