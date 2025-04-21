import React from 'react'
import Hearder from '../components/header'
import Career from '../components/career'
import Aboutme from '../components/aboutme'
import Experience from '../components/experience'
import Contact from '../components/contact'
import Services from '../components/services'
import Footer from '../components/footer'
import Skills from '../components/skills'



export default function Homepage() {

  return (
    <div>
      <Hearder />
      <Career />
      <Aboutme />
      <Skills />
      <Experience />

      <Services />

      <Contact />
      <Footer />
    </div>
  )
}

