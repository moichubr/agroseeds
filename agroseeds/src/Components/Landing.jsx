import React from "react";
// import {Cloudinary} from "@cloudinary/url-gen";
import videobg from "../assets/videobg.mp4"



const Landing = () => {

          // Create a Cloudinary instance and set your cloud name.
// const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'dqefppqdd'
//     }
//   });
  
//   const myVideo = "https://res.cloudinary.com/dqefppqdd/video/upload/v1693519029/WhatsApp_Video_2023-08-31_at_17.27.15_tktt3y.mp4"
  

    return(
     <div id="landing" className="main">
        <video src={videobg} autoPlay loop muted/>
        <div className="title text-white text-2xl">A G R O V E R S E</div>
        <div className="content text-white mt-28 ">
            <h2 className="text-2xl pl-2">MAS DE 60 AÑOS</h2>
            <h1 className="text-7xl">JUNTO AL CAMPO</h1>
        </div>
     </div>

     

//     <img src={bg} alt="img" className="absolute z-10 w-auto min-w-full min-h-full max-w-none"/>
    
//     <div className="z-20 ml-20">
    
//     <div className="font-light">
//         <p className="text-white text-6xl">AGROSEED</p>
//     </div>

   
//   <div
//     className=" text-white lg:mt-36"
//   >
//     <h2 className="pl-2 text-xl font-light sm:text-2xl md:text-4xl lg:text-3xl md:pl-2 lg:pl-2">MAS DE 60 AÑOS</h2>
//      <h1 className="text-2xl font-light sm:text-2xl md:text-4xl lg:text-7xl">JUNTO AL CAMPO</h1>
    
//   </div>
    
//     </div>


        // <main id="Landing" className="mt-10 ml-4 sm:ml-6 md:ml-20 lg:ml-20 md:mt-14 lg:mt-24">
        //     <section className="">
        //         <div className="text-lime-700">
        //         <h2 className="pl-2 text-2xl md:text-2xl lg:text-2xl md:pl-2 lg:pl-2">MAS DE 60 AÑOS</h2>
        //         <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">JUNTO AL CAMPO</h1>
        //         </div>

        //         <div className="mt-10 md:">
        //             <h1>VIDEO</h1>
        //         </div>
        //     </section>
        // </main>
    )
}

export default Landing