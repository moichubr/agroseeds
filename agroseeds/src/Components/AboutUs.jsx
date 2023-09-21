import Image from "./Image"

const AboutUs = () => {
  const bg = "https://res.cloudinary.com/dqefppqdd/image/upload/v1695245209/Dise%C3%B1o_sin_t%C3%ADtulo_2_onsiga.png"
//actualmente
    return(
        <section id="about" style={{ backgroundImage: `url(${bg})` }} className="bg-no-repeat lg:mt-16 mt-10 object-cover ">
    <div className=" text-center text-green-900">
    <span className=" lg:text-5xl text-4xl px-4 rounded-md font-extralight">LA <span className="font-semibold">EMPRESA</span></span>
    </div>
          <div className="lg:grid lg:grid-cols-2 lg:w-6/8">

  <div className="lg:col-span-1 text-white lg:h-auto text-center font-thin lg:py-10 pt-16 pb-4">
    <div className="flex flex-col items-center lg:w-2/3 mx-auto px-2 w-full text-md lg:mt-10">
      <p className="pt-4">
        Nuestro origen se remonta a mas de 60 años atrás, cuando las máquinas eran a vapor y se cosechaba a mano, bajo la firma Orlando Bouvet e Hijos S.R.L. Durante muchos años nos hemos destacado en la labor agrícola en Entre Ríos y Corrientes.
      </p>
      <p className="pt-4">Desde hace algunos años hemos acoplado el servicio de trilla con la siembra directa, dando origen a Agroseed, que busca dar una solución a esta parte del proceso agrícola.</p>
    
      <p className="pt-4">
        La excelencia en nuestra labor es lo que nos identifica. Contamos con un equipo humano consolidado, con vasta experiencia y sólidos conocimientos en todo el proceso agrícola garantizando un resultado destacable.
      </p>
      <p className="pt-4">
        Conocemos el esfuerzo y sacrificio del campo, es por ello que cuidamos cada detalle para brindarle a nuestros clientes la tranquilidad de recibir un servicio de calidad.
      </p>
    </div>
  </div>
<div className="lg:col-span-1 lg:w-3/4 mx-auto flex lg:justify-center lg:items-center">
  <Image />
</div>

  </div>
</section>
        
    )
}

export default AboutUs