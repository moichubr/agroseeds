import React from "react";

const Navbar = () => {

    return(
        <header className="w-full h-16 bg-transparent fixed z-30">
            <nav className="flex items-center justify-center">
            <a href="#landing" className="text-gray-600 p-4">
                INICIO
            </a>
            <a href="#services" className="text-gray-600 p-4 ">
                SOLUCIONES
            </a>

            
            <a href="#gallery" className="text-gray-600 p-2">
                GALERÍA
            </a>

            <a href="#about" className="text-gray-600 p-4">
                QUIÉNES SOMOS?
            </a>

            <a href="#contact" className="text-gray-600 p-2">
                CONTACTO
            </a>
            </nav>
           
        </header>
    )
}

export default Navbar