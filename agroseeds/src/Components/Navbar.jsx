
const Navbar = () => {
    


    return(

        <header className="sticky top-0  bg-green-500 z-10 max-w-full">
        <div className="container relative mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center justify-center max-w-full">
          <a
            href="#landing"
            className="text-xl font-semibold text-white lg:mr-20"
          >
           A G R O S E E D
          </a>
  
          <nav className="py-1 pl-4 text-sm lg:ml-24 flex flex-wrap items-center lg:text-base justify-center text-slate-100">
            <a href="#landing" className="mr-6  hover:font-bold hover:border-b-2 hover:border-slate-100">
              INICIO
            </a>
            <a href="#services" className="mr-6 hover:border-b-2 hover:border-slate-100">
              SERVICIOS
            </a>
            <a href="#about" className="mr-6 hover:border-b-2 hover:border-slate-100">
              QUIÉNES SOMOS?
            </a>
            <a href="#gallery" className="mr-6 hover:border-b-2 hover:border-slate-100">
              GALERÍA
            </a>
            <a href="#contact" className="hover:border-b-2 hover:border-slate-100">
              CONTACTO
            </a>
          </nav>
               
    

        </div>
      </header>
    )
}

export default Navbar