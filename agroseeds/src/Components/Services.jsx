import { useState } from "react";
import Modal from "./Modal";

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
      detalle: "Al trabajar con nosotros dispondrá de 3 máquinas <b>New Holland</b> y 3 tractores con tolva con balanza que permiten llevar un control del rinde.<br>Contamos con:<br>- 2 cabezales maiceros de 8 surcos a 52cm <br>- 3 cabezales sojeros (dos de 19 pies y uno de 23 pies)<br>- cabezal arrocero de 19 pies <br>- cabezal recolector para cultivos como avena, coreandro, regrass.<br>Nuestras máquinas cuentan con picador de paja, desparramador de granza y son <b>doble tracción</b> pudiendo acceder a terrenos anegados sin dificultad.",
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
      detalle: "detalle siembra",
    },
    otros_servicios: {
      servicios: ["Fertilización", "Acarreo"],
      detalle: "Disponemos de 3 tractores con tolva con balanza con capacidad de carga de 14 y 17 toneladas para el acarreo de granos.<br> Fertilización terrestre de 30 metros de ancho por pasada."
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
      detalle:"Tenemos un taller completo, con personal altamente capacitado con mas de 30 años de experiencia en el rubro. Cuidamos cada detalle, caracterizándonos por entregar trabajos de alta calidad.<br>Ofrecemos:<br>-Servicio de tornería y soldadura en general.<br>-Reparación de maquinarias agrícolas (tractores, sembradoras, cosechadoras).<br>-Rectificado y balanceo de ejes de hasta xx metros.<br>-Fresado (producción de engranajes, kslkdlsk, xslksl).<br>-Consulte por trabajos especiales.",
    },
  };

  return (
    <section id="services" >
      <div className="container mx-auto">
        <div className="text-white lg:h-auto text-center font-thin pt-6 lg:pt-12">
          {/* <span className="text-xl bg-green-950 p-4 py-2 px-4 items-center rounded-md ">
            Servicios
          </span> */}
          <span className="text-green-800 text-6xl font-semibold">SERVICIOS</span>
        </div>

        <div className="lg:flex lg:flex-row flex flex-col mx-auto w-[75%] p-4 mt-8 lg:mt-2  text-white lg:justify-center flex-nowrap lg:w-full ">
          <div className="border rounded-md border-gray-300 shadow-2xl p-4 my-4 lg:mr-4">
            <h3 className="text-xl font-semibold mb-2 text-green-950">
              Siembra
            </h3>
            <ul className="pl-2">
              {data.siembra.cereales.map((el, index) => {
                return (
                  <li key={index} className="text-green-950">
                    - {el}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={()=> {setIsModalOpen(true);
                 setModalContent(data.siembra.detalle)}}
              className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right  mt-4 hover:scale-95 transition"
            >
              Ver mas
            </button>
          </div>

          <div className="border rounded-md border-gray-300 shadow-2xl p-4 my-4 lg:mr-4">
            <h1 className="text-xl font-semibold mb-2 text-green-950">
              Cosecha
            </h1>
            <ul className="pl-2">
              {data.trilla.cereales.map((el, index) => {
                return (
                  <li key={index} className="text-green-950">
                    - {el}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={()=> {setIsModalOpen(true);
                setModalContent(data.trilla.detalle)}}
              className="text-white bg-green-700 py-2 px-2 rounded-3xl  float-right mt-4 hover:scale-95 transition"
            >
              Ver mas
            </button>
          </div>

          <div className="border rounded-md border-gray-300 shadow-2xl p-4 my-4 lg:mr-4">
            <h1 className="text-xl font-semibold mb-2 text-green-950">
              Taller
            </h1>
            <ul className="pl-2">
              {data.taller.servicios.map((el, index) => {
                return (
                  <li key={index} className="text-green-950">
                    - {el}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={()=> {setIsModalOpen(true);
                setModalContent(data.taller.detalle)}}
              className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right mt-4 hover:scale-95 transition"
            >
              Ver mas
            </button>
          </div>

          <div className="border rounded-md border-gray-300 shadow-2xl p-4 my-4">
            <h1 className="text-xl font-semibold mb-2 text-green-950">
              Otros servicios
            </h1>
            <ul className="pl-2">
              {data.otros_servicios.servicios.map((el, index) => {
                return (
                  <li key={index} className="text-green-950">
                    - {el}
                  </li>
                );
              })}
            </ul>

            <button
             onClick={()=> {setIsModalOpen(true);
              setModalContent(data.otros_servicios.detalle)}}
              className="text-white bg-green-700 py-2 px-3 rounded-3xl float-right hover:scale-95 transition mt-4"
            >
              Ver mas
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