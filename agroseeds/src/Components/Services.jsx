import {RxDotFilled} from "react-icons/rx"
// import {useNavigate} from "react-router-dom"

const Services = () => {
  // const navigate = useNavigate()

  // function changeNavigate() {
  //   navigate('/servicios')
  // }

  const data = {
    trilla: [
      "Soja",
      "Maíz",
      "Trigo",
      "Arroz",
      "Sorgo",
      "Avena",
      "Lino",
      "Consulte otros",
    ],
    siembra: [
      "Soja",
      "Maíz",
      "Trigo",
      "Arroz",
      "Sorgo",
      "Avena",
      "Lino",
      "Consulte otros",
    ],
    otros_servicios: ["Fertilización", "Acarreo"],
    taller: [
      "Reparación de maquinarias agrícolas",
      "Balanceo de ejes",
      "Rectificado de ejes",
      "Fresado",
      "Servicio de tornería",
      "Soldaduras en general",
    ],
  };


  return (
    <section id="services" className=" pb-6">
      <div className="container">
        <div className="text-white lg:h-auto lg:p-4 lg:ml-44 lg:text-left text-center text-xl font-thin pt-12">
          <span className="text-2xl bg-green-950  p-4 py-2 px-4 items-center rounded-md ">
            Servicios
          </span>
        </div>

        <div className="lg:flex lg:flex-row flex flex-col mx-auto w-[75%] p-4 mt-8 lg:mt-2  text-white lg:justify-center flex-nowrap lg:w-full lg:mx-10">
          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4 lg:mr-4">
            <h3 className="text-xl font-semibold mb-2 text-green-950">Siembra</h3>
            <ul className="pl-2">
              {data.siembra.map((el, index) => {
                return <li key={index} className="text-green-950">- {el}</li>;
              })}
            </ul>
            <button className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right mt-4">Quiero saber mas</button>
          </div>

          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4 lg:mr-4">
            <h1 className="text-xl font-semibold mb-2 text-green-950">Cosecha</h1>
            <ul className="pl-2">
              {data.trilla.map((el, index) => {
                return <li key={index} className="text-green-950">- {el}</li>;
              })}
            </ul>
            <button className="text-white bg-green-700 py-2 px-2 rounded-3xl  float-right mt-4">Quiero saber mas</button>
          </div>

          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4 lg:mr-4">
            <h1 className="text-xl font-semibold mb-2 text-green-950">Taller</h1>
            <ul className="pl-2">
              {data.taller.map((el, index) => {
                return <li key={index} className="text-green-950">- {el}</li>;
              })}
            </ul>
            <button className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right mt-4">Quiero saber mas</button>
          </div>

          <div className="border rounded-md border-gray-600 shadow-xl p-4 my-4">
            <h1 className="text-xl font-semibold mb-2 text-green-950">Otros servicios</h1>
            <ul className="pl-2">
              {data.otros_servicios.map((el, index) => {
                return <li key={index} className="text-green-950">- {el}</li>;
              })}
            </ul>
         
            <button className="text-white bg-green-700 py-2 px-2 rounded-3xl float-right mt-4">Quiero saber mas</button>
          
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
