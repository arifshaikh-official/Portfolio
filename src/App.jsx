import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TargetCursor from './components/TargetCursor';


const App = () => {
  return (
    <div>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true} />
        
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App