
const Navbar = () => {
    


    return(

        <header className="bg-transparent md:sticky top-0 z-10">
        <div className="container relative mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-full">
          <a
            href="#landing"
            className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0 lg:ml-40"
          >
           A G R O S E E D
          </a>
  
          <nav className=" md:ml-4 md:py-1 md:pl-4 	lg:ml-16 flex flex-wrap items-center text-base justify-center">
            <a href="#landing" className="mr-5 text-gray-500 hover:font-bold">
              INICIO
            </a>
            <a href="#about" className="mr-5 text-gray-500 hover:font-bold">
              QUIÉNES SOMOS?
            </a>
            <a href="#services" className="mr-5 text-gray-500 hover:font-bold">
              SERVICIOS
            </a>
            <a href="#gallery" className="mr-5 text-gray-500 hover:font-bold">
              GALERÍA
            </a>
            <a href="#contact" className="mr-5 text-gray-500 hover:font-bold">
              CONTACTO
            </a>
          </nav>
               
    

        </div>
      </header>

//  <header className="w-full h-16 bg-transparent fixed z-40">
//   <div className="container relative mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center max-w-full">
//     <a
//     onClick={() => scrollToSection('landing')}
//       href="#landing"
//       className="title mx-auto lg:ml-3 text-xl font-bold  text-white items-left py-auto md:mb-3"
//     >
//       A G R O S E E D
//     </a>

//     <nav className="m-auto py-4 flex flex-wrap items-center justify-center align-middle">
//       <a onClick={() => scrollToSection('landing')} href="#landing" className="text-gray-100 font-semibold hover:scale-110 transition-transform  p-2 md:p-1">
//         INICIO
//       </a>
//       <a onClick={() => scrollToSection('services')} href="#services" className="text-gray-100 font-semibold p-2 md:p-1">
//         SOLUCIONES
//       </a>
//       <a onClick={() => scrollToSection('gallery')} href="#gallery" className="text-gray-100 font-semibold p-2 md:p-1">
//         GALERÍA
//       </a>
//       <a onClick={() => scrollToSection('about')} href="#about" className="text-gray-100  font-semibold p-2 md:p-1">
//         QUIÉNES SOMOS?
//       </a>
//       <a onClick={() => scrollToSection('contact')} href="#contact" className="text-gray-100  font-semibold p-2">
//         CONTACTO
//       </a>
//     </nav>
//   </div>
// </header>




        // <header className="w-full h-16 bg-transparent fixed z-30">
        //     <div className="container relative mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-full">
        //       <a
        //   href="#about"
        //   className="title ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0"
        // >
        //   A G R I C O L A total
        // </a>
        //     {/* <div className="title text-white text-2xl"></div> */}
        //     <nav className=" md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
        //     <a href="#landing" className="text-gray-600 p-4 md:p-1">
        //         INICIO
        //     </a>
        //     <a href="#services" className="text-gray-600 p-4 md:p-1">
        //         SOLUCIONES
        //     </a>

            
        //     <a href="#gallery" className="text-gray-600 p-2 md:p-1">
        //         GALERÍA
        //     </a>

        //     <a href="#about" className="text-gray-600 p-4 md:p-1">
        //         QUIÉNES SOMOS?
        //     </a>

        //     <a href="#contact" className="text-gray-600 p-2">
        //         CONTACTO
        //     </a>
        //     </nav>
        //    </div>
        // </header>
    )
}

export default Navbar