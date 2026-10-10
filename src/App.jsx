import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './Layout/Navbar'
import Hero from './Sections/Hero'  
import TechStack from './Sections/TechStack'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Experience from './Sections/Experience'
import Contact from './Sections/Contact'
import Footer from './Layout/Footer'
import Education from './Sections/Education'



function App() {
 
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <TechStack/>
        <About/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
        <Footer/>
        

      </div>
    </>
  )
}

export default App
