// import videobg from "../assets/videobg.mp4";


const Landing = () => {
  const video = "https://res.cloudinary.com/dqefppqdd/video/upload/v1693519029/AGROSEED/WhatsApp_Video_2023-08-31_at_17.27.15_tktt3y.mp4"

  return (

    <section id="landing">
      <div className="main">
        <video src={video} autoPlay loop muted />
        <div className="content text-white mt-44 lg:mt-28 max-w-full">
          <h2 className="text-2xl font-medium w-fit">MÁS DE 60 AÑOS</h2>
          <div className="w-[90%]">
          <h1 className="lg:text-7xl text-6xl font-medium">JUNTO AL <span className="text-6xl lg:text-7xl font-bold">CAMPO</span></h1>
          </div>
        <p className="lg:text-3xl text-2xl font-extralight w-fit">EXPERIENCIA,</p>
        <p className="lg:text-3xl text-2xl font-extralight w-fit">COMPROMISO,</p>
        <p className="lg:text-3xl text-2xl font-extralight w-fit">RESPONSABILIDAD.</p>
        </div>
        
      </div>
    </section>
    

  );
};

export default Landing;
