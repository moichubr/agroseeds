import { useState } from "react";
import Modal from "./Modal";
import { LiaSeedlingSolid, LiaToolsSolid } from "react-icons/lia";
import { MdOutlineAgriculture } from "react-icons/md";
import { GiSickle } from "react-icons/gi";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

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
        "Soja,",
        "Maíz,",
        "Trigo,",
        "Arroz,",
        "Sorgo,",
        "Avena,",
        "Lino,",
        "Consulte otros",
      ],
      detalle:
        "Al trabajar con nosotros dispondrá de 3 máquinas <b>New Holland</b> con doble tracción haciendo cada una entre 30 y 40 Has. por día, y 3 tractores con tolva con balanza que permiten llevar un control del rinde.",
      modal:
        "Contamos con:<br>- 2 cabezales maiceros de 8 surcos a 52cm <br>- 3 cabezales sojeros (dos de 19 pies y uno de 23 pies)<br>- cabezal arrocero de 19 pies <br>- cabezal recolector para cultivos como avena, coreandro, ryegrass.<br>Nuestras máquinas cuentan con picador de paja, desparramador de granza y son <b>doble tracción</b> pudiendo acceder a terrenos anegados sin dificultad.",
    },
    siembra: {
      cereales: ["Soja,", "Maíz,", "Sorgo,", "Consulte otros"],
      detalle:
        "El servicio se realiza con sembradora de granos gruesos de 16 surcos a 52,5 centímetros",
      modal: "modal siembra",
    },
    otros_servicios: {
      servicios: ["fertilización,", "acarreo,", "rastrón."],
      detalle:
        "Disponemos de 3 tractores con tolva con balanza con capacidad de carga de 14 y 17 toneladas para el acarreo de granos.<br>Fertilización terrestre con 2000 kg de capacidad con un ancho de labor de 23 metros.",
      modal: "",
    },
    taller: {
      servicios: [
        "Reparación de maquinarias agrícolas |",
        "Balanceo de ejes |",
        "Rectificado de ejes |",
        "Fresado |",
        "Servicio de tornería |",
        "Soldaduras en general |",
        "Consulte por trabajos especiales",
      ],
      detalle:
        "Tenemos un taller completo, con personal altamente capacitado con mas de <b>30 años de experiencia</b> en el rubro.<br>Cuidamos cada detalle, caracterizándonos por entregar trabajos de alta calidad.",
      modal:
        "Ofrecemos:<br>-Servicio de tornería y soldadura en general<br>-Reparación de maquinarias agrícolas (tractores, sembradoras, cosechadoras)<br>-Rectificado de ejes de hasta 80cm<br>-Balanceo de ejes de hasta 1.30 metros (picadores)<br>-Fresado (producción de engranajes, estrías, chavetero)<br>-Consulte por trabajos especiales",
    },
  };

  return (
    <section id="services">
      <div className="text-white lg:h-auto text-center font-thin pt-16">
        <span className="text-green-800 lg:text-4xl text-3xl font-light">
          NUESTROS <span className="font-semibold">SERVICIOS</span>
        </span>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col mx-auto lg:w-[85%] w-[95%] p-4 mt-2  text-white lg:justify-around flex-nowrap lg:flex-wrap">
        <div className="col-span-1">
          <div className="flex flex-col items-center my-10 lg:w-full border shadow-lg rounded-3xl p-2 pb-4 lg:pb-6 lg:h-[400px]">
            <div className="text-center w-fit p-2 mt-2 text-green-700">
              <GiSickle size={30} />
            </div>
            <h3 className="text-xl font-semibold my-2 text-center text-green-950">
              COSECHA
            </h3>
            <p
              className="text-green-950 text-md lg:text-sm text-center lg:px-8 lg:mt-6"
              dangerouslySetInnerHTML={{ __html: data.trilla.detalle }}
            ></p>
            <span className="text-green-950 font-semibold lg:pt-10 pt-4">
              Qué cultivos cosechamos?
            </span>
            <div className="flex flex-wrap justify-center lg:text-sm ">
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
              className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 lg:mt-10 hover:scale-95 transition"
            >
              Más detalles
            </button>
          </div>

          <div className="flex flex-col items-center mb-4 lg:my-10 lg:w-full border shadow-lg rounded-3xl p-2 lg:h-[380px]">
            <div className="text-center w-fit p-2 mt-2 text-green-700">
              <LiaSeedlingSolid size={30} />
            </div>
            <h3 className="text-xl font-semibold my-2 text-center text-green-950">
              SIEMBRA
            </h3>
            <p className="text-green-950 text-md lg:text-sm text-center lg:px-8 lg:mt-6">
              {data.siembra.detalle}
            </p>
            <span className="text-green-950 font-semibold lg:pt-6 mt-4">
              Qué cultivos sembramos?
            </span>
            <div className="flex flex-wrap justify-center lg:text-sm my-4">
              {data.siembra.cereales.map((el, index) => {
                return (
                  <p key={index} className="text-green-950 pr-1">
                    {el}
                  </p>
                );
              })}
            </div>
            {/* <button
    onClick={() => {
      setIsModalOpen(true);
      setModalContent(data.siembra.modal);
    }}
    className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 hover:scale-95 transition"
  >
    Mas detalles
  </button> */}
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col items-center my-10 lg:w-full border shadow-lg rounded-3xl p-2 pb-4 lg:h-[400px]">
            <div className="text-center w-fit p-2 mt-2 text-green-700">
              <LiaToolsSolid size={30} />
            </div>
            <h3 className="text-xl font-semibold my-2  text-center text-green-950">
              TALLER ESPECIALIZADO
            </h3>
            <p
              className="text-green-950 text-md lg:text-sm text-center lg:px-8 lg:mt-6"
              dangerouslySetInnerHTML={{ __html: data.taller.detalle }}
            ></p>
            <span className="text-green-950 font-semibold lg:pt-6 pt-2">
              Qué servicios ofrecemos?
            </span>
            <ul className="flex flex-wrap justify-center lg:text-sm">
              {data.taller.servicios.map((el, index) => {
                return (
                  <li key={index} className="text-green-950 pr-2 lg:pr-2">
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
              Más detalles
            </button>
          </div>

          <div className="flex flex-col items-center my-10 lg:w-full border shadow-lg rounded-3xl p-2 pb-3 lg:h-[380px]">
            <div className="text-center w-fit p-2 mt-2 text-green-700">
              <MdOutlineAgriculture size={35} />
            </div>
            <h3 className="text-xl font-semibold my-2 text-center text-green-950">
              OTROS SERVICIOS
            </h3>
            <p className="text-green-950 text-md lg:text-sm text-center lg:mt-6 lg:px-8">
              Para complementar la siembra y la cosecha, también ofrecemos los
              servicios de <b>fertilización, acarreo y rastrón</b>.
            </p>

            {/* <div className="flex flex-wrap justify-center lg:justify-start lg:text-sm">
    {data.otros_servicios.servicios.map((el, index) => {
      return (
        <p key={index} className="text-green-950 font-semibold pr-2">
          {el}
        </p>
      );
    })}
  </div> */}

            <p
              className="text-green-950 text-md lg:text-sm text-center mt-4 lg:px-8 lg:py-6"
              dangerouslySetInnerHTML={{ __html: data.otros_servicios.detalle }}
            ></p>

            {/* <button
    onClick={() => {
      setIsModalOpen(true);
      setModalContent(data.otros_servicios.modal);
    }}
    className="text-white bg-green-700 py-2 px-6 rounded-3xl mt-4 hover:scale-95 transition"
  >
    Mas detalles
  </button> */}
          </div>
        </div>

        <Modal visible={isModalOpen} onClose={closeModal}>
          {" "}
          <div dangerouslySetInnerHTML={{ __html: modalContent }}></div>{" "}
        </Modal>
      </div>
    </section>
  );
};

export default Services;

// {modalContent}
