import React from 'react'
import Navbar from '../Components/Navbar'
import SectionProfil from '../Sections/About/SectionProfil'
import SectionVertikultur from '../Sections/About/SectionVertikultur'
import SectionTim from '../Sections/About/SectionTim'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
      <Navbar/>
      <SectionProfil/>
      <SectionVertikultur/>
      <SectionTim/>
      <Footer/>
    </>
  )
}
