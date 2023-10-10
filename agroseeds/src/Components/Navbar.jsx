
const Navbar = () => {
    


    return(

        <header className="sticky top-0  bg-green-500 z-10 max-w-full">
        <div className="container relative mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center justify-center max-w-full">
          <a
            href="#landing"
            className="text-xl font-semibold text-white lg:mr-20 hover:animate-bounce"
          >
           A G R O S E E D
          </a>
  
          <nav className="py-1 pl-4 text-sm lg:ml-24 flex flex-wrap items-center lg:text-base justify-center text-slate-100">
            <a href="#landing" className="mr-6  relative hover:border-slate-100 group">
              INICIO
              <span className="absolute left-0 w-full h-0.5 bottom-0 bg-slate-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#services" className="mr-6 relative hover:border-slate-100 group">
              SERVICIOS
              <span className="absolute left-0 w-full h-0.5 bottom-0 bg-slate-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#about" className="mr-6 relative group hover:border-slate-100">
              QUIÉNES SOMOS?
              <span className="absolute left-0 w-full h-0.5 bottom-0 bg-slate-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#gallery" className="mr-6 relative group hover:border-slate-100">
              GALERÍA
              <span className="absolute left-0 w-full h-0.5 bottom-0 bg-slate-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#contact" className="relative group hover:border-slate-100">
              CONTACTO
              <span className="absolute left-0 w-full h-0.5 bottom-0 bg-slate-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
            </a>
          </nav>
               
    

        </div>
      </header>
    )
}

export default Navbar