
import './App.css'
import Landing from './Components/Landing'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
// import Image from './Components/Image'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import WhatsappBtn from './Components/WhatsappBtn'
function App() {

  return (
    <div className='max-w-full w-[100vw] overflow-hidden'>
      <Navbar />
      <Landing />
      <Services />
      {/* <Image /> */}
      <AboutUs />
      <Gallery />
      <WhatsappBtn />
      <Footer />
    </div>
  )
}

export default App
