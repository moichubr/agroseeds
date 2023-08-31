import { useState } from 'react'
import Landing from './Components/Landing'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'


import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Landing />
      <Services />
      <Gallery />
      <Contact />
    </main>
  )
}

export default App
