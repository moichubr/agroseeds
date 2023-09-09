import videobg from "../assets/videobg.mp4";

const Landing = () => {



  return (

    <section id="landing">
      <div className="main">
        <video src={videobg} autoPlay loop muted />
        <div className="content text-white mt-48 lg:mt-28 ">
          <h2 className="text-2xl font-medium pl-2">MAS DE 60 AÑOS</h2>
          <h1 className="text-7xl font-medium">JUNTO AL <span className="text-7xl font-bold">CAMPO</span></h1>
        <p className="text-4xl font-extralight">EXPERIENCIA, </p>
        <p className="text-4xl font-extralight">COMPROMISO, </p>
        <p className="text-4xl font-extralight">RESPONSABILIDAD.</p>
        </div>
        
      </div>
    </section>
    

  );
};

export default Landing;
