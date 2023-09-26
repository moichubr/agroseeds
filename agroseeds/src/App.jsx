import './App.css'
import Landing from './Components/Landing'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Values from './Components/Values'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import WhatsappBtn from './Components/WhatsappBtn'


function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <Values />
      <Services />

      <AboutUs />
      <Gallery />
      <WhatsappBtn />
      <Footer />
      </>
  )
}

export default App

