import React from 'react'
import './App.css'
import Landing from './Components/Landing'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App() {

  return (
    <main>
      <Navbar />
      <Landing />
      <AboutUs />
      <Services />
      <Gallery />
      <Contact />
    </main>
  )
}

export default App
