
import './App.css'
import Landing from './Components/Landing'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Image from './Components/Image'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Landing />
      <Services />
      <Image />
      <AboutUs />
      <Gallery />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App
