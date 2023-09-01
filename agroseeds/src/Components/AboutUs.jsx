import React from "react";

const AboutUs = () => {

    return(
        <section id="about" className="bg-green-900 min-h-screen">
  <div className="text-white h-auto p-4 text-center text-xl font-thin pt-16">
    <span className="bg-green-950 pl-3 pr-4 pt-2 pb-2 rounded-md">Quiénes somos?</span>
    <div className="flex flex-col items-center w-1/2 mx-auto">
      <p className="pt-4">
        Somos una empresa familiar con mas de 60 años de experiencia trabajando en el sector agrícola en Entre Ríos y Corrientes.
      </p>
      <p>
        La excelencia en nuestra labor es lo que nos identifica. Contamos con equipo humano consolidado, con gran experiencia y sólidos conocimientos en todo el proceso agrícola garantizando un resultado destacable.
      </p>
      <p>
        Cuidamos cada detalle para brindarle a nuestros clientes un servicio de calidad.
      </p>
    </div>
  </div>
</section>
        
    )
}

export default AboutUs