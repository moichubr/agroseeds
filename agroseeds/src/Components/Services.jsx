const Services = () => {
  const data = {
    trilla: [
      "Soja",
      "Maíz",
      "Trigo",
      "Arroz",
      "Avena",
      "Lino",
      "Consulte otros",
    ],
    siembra: [
      "Soja",
      "Maíz",
      "Trigo",
      "Arroz",
      "Avena",
      "Lino",
      "Consulte otros",
    ],
    otros_servicios: ["Fertilización", "Acarreo"],
    taller: [
      "Reparación de maquinarias agrícolas",
      "Servicio de balanceo",
      "Servicio de tornería",
      "Soldaduras en general",
    ],
  };


  return (
    <section id="services" className="bg-green-700 pb-6">
      <div className="container lg:ml-26">
        <div className="text-white lg:h-auto lg:p-4 lg:ml-28 lg:text-left text-center text-xl font-thin pt-12">
          <span className="text-2xl bg-green-950 lg:bg-transparent lg:p-0 py-2 px-4 items-center rounded-md ">
            Servicios
          </span>
        </div>

        <div className="lg:flex lg:flex-row grid grid-cols-2 ml-4 mt-8 lg:mt-2 gap-y-4 gap-x-8 text-white lg:justify-between md:flex-nowrap lg:w-2/3 lg:mx-auto ">
          <div>
            <h3 className="text-xl font-semibold mb-2">Siembra</h3>
            <ul className="pl-2">
              {data.siembra.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-2">Cosecha</h1>
            <ul className="pl-2">
              {data.trilla.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-2">Taller</h1>
            <ul className="pl-2">
              {data.taller.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-2">Otros servicios</h1>
            <ul className="pl-2">
              {data.otros_servicios.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
