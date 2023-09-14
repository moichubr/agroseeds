import { useState } from "react";
import Modal from "./Modal";
import wallpaper from "../assets/wallpaper6.png"
import {LiaSeedlingSolid, LiaToolsSolid} from "react-icons/lia"
import {MdOutlineAgriculture} from "react-icons/md"
import {GiSickle} from "react-icons/gi"


const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // const openModal = (content) => {
  //   setModalContent(content);
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const data = {
    trilla: {
      cereales: [
        "Soja",
        "Maíz",
        "Trigo",
        "Arroz",
        "Sorgo",
        "Avena",
        "Lino",
        "Consulte otros",
      ],
      detalle: "Al trabajar con nosotros dispondrá de 3 máquinas <b>New Holland</b> con doble tracción haciendo cada una entre 30 y 40 Has. por día, y 3 tractores con tolva con balanza que permiten llevar un control del rinde.",
      modal:"Contamos con:<br>- 2 cabezales maiceros de 8 surcos a 52cm <br>- 3 cabezales sojeros (dos de 19 pies y uno de 23 pies)<br>- cabezal arrocero de 19 pies <br>- cabezal recolector para cultivos como avena, coreandro, regrass.<br>Nuestras máquinas cuentan con picador de paja, desparramador de granza y son <b>doble tracción</b> pudiendo acceder a terrenos anegados sin dificultad."
    },
    siembra: {
      cereales: [
        "Soja",
        "Maíz",
        "Trigo",
        "Arroz",
        "Sorgo",
        "Avena",
        "Lino",
        "Consulte otros",
      ],
      detalle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corporis, nam error ullam officiis culpa reprehenderit rerum, deleniti eum sit recusandae, autem nisi voluptas magni quasi quae blanditiis",
      modal:"modal siembra",
    },
    otros_servicios: {
      servicios: ["fertilización y", "acarreo"],
      detalle:"detalle otros servicios",
      modal: "Disponemos de 3 tractores con tolva con balanza con capacidad de carga de 14 y 17 toneladas para el acarreo de granos.<br>Fertilización terrestre de 30 metros de ancho por pasada."
    },
    taller: {
      servicios: [
        "Reparación de maquinarias agrícolas",
        "Balanceo de ejes",
        "Rectificado de ejes",
        "Fresado",
        "Servicio de tornería",
        "Soldaduras en general",
        "Consulte por trabajos especiales"
      ],
      detalle:"Tenemos un taller completo, con personal altamente capacitado con mas de 30 años de experiencia en el rubro.<br>Cuidamos cada detalle, caracterizándonos por entregar trabajos de alta calidad.",
      modal:"Ofrecemos:<br>-Servicio de tornería y soldadura en general<br>-Reparación de maquinarias agrícolas (tractores, sembradoras, cosechadoras)<br>-Rectificado de ejes de hasta 80cm<br>-Balanceo de ejes de hasta 1.30 metros (picadores)<br>-Fresado (producción de engranajes, estrías, chavetero)<br>-Consulte por trabajos especiales"
    },
  };

  return (
    <section id="services" >
      <div  style={{ backgroundImage: `url(${wallpaper})` }} className="container wallpaper mx-0 pb-16 lg:pb-6">
        <div className="text-white lg:h-auto text-center font-thin pt-6 lg:pt-12">
          {/* <span className="text-xl bg-green-950 p-4 py-2 px-4 items-center rounded-md ">
            Servicios
          </span> */}
          <span className="text-green-800 text-5xl font-light">NUESTROS <span className="font-semibold">SERVICIOS</span></span>
        </div>

        <div className="lg:flex lg:flex-row flex flex-col mx-auto w-[95%] p-4 mt-8 lg:mt-2  text-white lg:justify-around flex-nowrap lg:flex-wrap lg:w-[90%] ">

        <div className="flex flex-col items-center mb-4 lg:my-10 lg:mr-4 lg:w-[20%]">
  <div className="text-center w-fit p-2 text-green-700">
    <LiaSeedlingSolid size={30} />
  </div>
  <h3 className="text-xl font-semibold mb-2 text-center text-green-950">
    SIEMBRA
  </h3>
  <p className="text-green-950 text-md lg:text-sm text-center">{data.siembra.detalle}</p>
  <span className="text-green-950 font-semibold pt-2">Qué cultivos sembramos?</span>
  <div className="flex flex-wrap justify-center lg:text-sm">
    {data.siembra.cereales.map((el, index) => {
      return (
        <p key={index} className="text-green-950 pr-1">
          {el}
        </p>
      );
    })}
  </div>
  <button
    onClick={() => {
      setIsModalOpen(true);
      setModalContent(data.siembra.modal);
    }}
    className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 hover:scale-95 transition"
  >
    Mas detalles
  </button>
</div>



<div className="flex flex-col items-center my-10 lg:mr-4 lg:w-[20%]">
  <div className="text-center w-fit p-2 text-green-700">
    <GiSickle size={30} />
  </div>
  <h3 className="text-xl font-semibold mb-2 text-center text-green-950">
    COSECHA
  </h3>
  <p className="text-green-950 text-md lg:text-sm text-center" dangerouslySetInnerHTML={{__html: data.trilla.detalle}}></p>
  <span className="text-green-950 font-semibold pt-2">Qué cultivos cosechamos?</span>
  <div className="flex flex-wrap justify-center lg:text-sm">
    {data.trilla.cereales.map((el, index) => {
      return (
        <p key={index} className="text-green-950 pr-1">
          {el}
        </p>
      );
    })}
  </div>
  <button
    onClick={() => {
      setIsModalOpen(true);
      setModalContent(data.trilla.modal);
    }}
    className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 hover:scale-95 transition"
  >
    Mas detalles
  </button>
</div>

<div className="flex flex-col items-center my-10 lg:mr-4 lg:w-[20%]">
  <div className="text-center w-fit p-2 text-green-700">
    <LiaToolsSolid size={30} />
  </div>
  <h3 className="text-xl font-semibold mb-2 text-center text-green-950">
    TALLER
  </h3>
  <p className="text-green-950 text-md lg:text-sm text-center" dangerouslySetInnerHTML={{__html: data.taller.detalle}}></p>
  <span className="text-green-950 font-semibold pt-2">Qué servicios ofrecemos?</span>
  <ul className="flex flex-wrap justify-center lg:justify-left lg:text-sm">
    {data.taller.servicios.map((el, index) => {
      return (
        <li key={index} className="text-green-950 pr-2 lg:pr-0">
          {el}
        </li>
      );
    })}
  </ul>
  <button
    onClick={() => {
      setIsModalOpen(true);
      setModalContent(data.taller.modal);
    }}
    className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 hover:scale-95 transition"
  >
    Mas detalles
  </button>
</div>

<div className="flex flex-col items-center my-10 lg:mr-4 lg:w-[20%]">
  <div className="text-center w-fit p-2 text-green-700">
    <MdOutlineAgriculture size={35} />
  </div>
  <h3 className="text-xl font-semibold mb-2 text-center text-green-950">
    OTROS SERVICIOS
  </h3>
  <p className="text-green-950 text-md lg:text-sm text-center">Para complementar la siembra y la cosecha, también ofrecemos los servicios de</p>
  
  <div className="flex flex-wrap justify-center lg:text-sm">
    {data.otros_servicios.servicios.map((el, index) => {
      return (
        <p key={index} className="text-green-950 font-semibold pr-2">
          {el}
        </p>
      );
    })}
  </div>
  <button
    onClick={() => {
      setIsModalOpen(true);
      setModalContent(data.otros_servicios.modal);
    }}
    className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 hover:scale-95 transition"
  >
    Mas detalles
  </button>
</div>


          <Modal
            visible={isModalOpen}
            onClose={closeModal}
          > <div dangerouslySetInnerHTML={{__html: modalContent}}></div> </Modal>
        </div>
      </div>
    </section>
  );
};

export default Services;

// {modalContent}