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
      detalle: "Al trabajar con nosotros dispondrá de 3 máquinas New Holland y 3 tractores con tolva con balanza permitiendo llevar un control del rinde. Contamos con 2 cabezales maiceros de 8 surcos a 52cm, 3 cabezales sojeros (dos de 19 pies y uno de 23 pies), un cabezal arrocero de 19 pies, cabezal recolector para cultivos como avena, coreandro, regrass. Nuestras máquinas cuentan con picador de paja, desparramador de granza y son doble tracción pudiendo acceder a terrenos anegados sin dificultad.",
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
      detalle: "detalle otros servicios",
    },
    taller: {
      servicios: [
        "Reparación de maquinarias agrícolas",
        "Balanceo de ejes",
        "Rectificado de ejes",
        "Fresado",
        "Servicio de tornería",
        "Soldaduras en general",
      ],
      detalle: "detalle taller",
    },
  };

  return (
    <section id="services" className=" pb-6">
      <div className="container">
        <div className="text-white lg:h-auto lg:p-4 lg:ml-44 lg:text-left text-center text-xl font-thin pt-12 lg:pt-12">
          <span className="text-xl bg-green-950  p-4 py-2 px-4 items-center rounded-md ">
            Servicios
          </span>
        </div>

        <div className="lg:flex lg:flex-row flex flex-col mx-auto w-[75%] p-4 mt-8 lg:mt-2  text-white lg:justify-center flex-nowrap lg:w-full lg:mx-10">
          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4 lg:mr-4">
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
              className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right mt-4"
            >
              Ver mas
            </button>
          </div>

          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4 lg:mr-4">
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
              className="text-white bg-green-700 py-2 px-2 rounded-3xl  float-right mt-4"
            >
              Ver mas
            </button>
          </div>

          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4 lg:mr-4">
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
              className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right mt-4"
            >
              Ver mas
            </button>
          </div>

          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4">
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
          > {modalContent} </Modal>
        </div>
      </div>
    </section>
  );
};

export default Services;
