import {BsFillTelephoneFill, BsFillPhoneFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

  const Footer = () => {

    function handleClick () {
        window.location.href = "https://api.whatsapp.com/send?phone=3447640311"; //abre una nueva pestaña a diferencia de location.href que abre en la misma pestaña
    }
   
    return(
       
        <div className="w-full min-h-screen flex items-center justify-center bg-green-900">
                <div className="w-full lg:w-4/5 lg:px-auto px-3 pt-3 text-white flex flex-col">
                    <div className="lg:w-2/3 w-full text-xl font-bold lg:ml-[5%] ">
                        <h1 className="lg:w-full w-2/3">Cómo podemos ayudarte?
                            Ponte en contacto</h1>
                    </div>

                    <div className="lg:grid lg:grid-cols-2 w-full h-auto p-2">
                    <div className=" lg:col-span-1 pt-8 pb-2 text-slate-200 flex flex-col">
        
           <div className="lg:ml-[5%] ">
            <span className="flex lg:justify-center justify-start text-lg font-light">ADMINISTRACIÓN & TALLER</span>
            <div className="flex flex-row lg:ml-16">
            <p className="text-md mt-2 font-medium "> <span className="inline-flex"><MdLocationOn size={20}/> </span> Bvrd. Francou 1464 - Villa Elisa, Entre Ríos</p>
            </div>
            <div className="flex flex-row lg:ml-16 mt-1">
            <p className="text-md font-medium"><span className="inline-flex mr-2"> <BsFillTelephoneFill size={20} /> </span>(03447) 480125</p>
            </div>
            <div className="flex flex-row lg:ml-16 mt-10">
            <span className="inline-flex mr-2 mt-3"> <BsFillPhoneFill size={20}/> </span>
            <div>
            <p className="text-md mt-2 font-medium ">(03447) 15640311 (Martín Blanc)</p>
            <p className="text-md mt-2 font-medium ">(03447) 15625520 (Fernando Bouvet)</p>
            </div>
            </div>
            </div>

            </div>

            
            <div className="col-span-1 p-4 w-[90%] h-full mx-auto mt-6">
                <iframe
            width="100%"
            height="100%"
            title="map"
            className="z-10 rounded-lg"
            src="https://www.google.com/maps/embed/v1/place?q=Boulevard+Francou+1464,+Villa+Elisa,+Entre+Ríos,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

                </div>

            </div>

                    {/* <div className="flex mt-8 flex-col md:flex-row md:justify-between"> */}
                        <div className="w-44 pt-6 md:pt-0 lg:ml-[15%] mt-8 justify-center mx-auto">
                            <button onClick={handleClick} className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center ">Consultar</button>
                        {/* </div> */}
                    </div>
                    <div className="flex flex-col">
                      
                        <hr className="border-gray-500 mt-12 w-full"/>
                        <p className="w-full text-center mt-12 text-gray-500">Copyright © 2023 Dev. Moira Brun | PH&Video: Luciano Durand</p>
                        <p className="w-full text-center mb-4 text-gray-500">Contacto: brunmoira@gmail.com</p>
                    </div>
                </div>
            </div>

        )
}

export default Footer

{/* 

// <div className="container section p-2 bg-green-900 h-[]">
//     <div>
//         <p>A G R O S E E D</p>

//     </div>
//     <div className="flex flex-col items-center justify-center text-slate-300">
//         <span className="text-xs">Copyright ©2023 Moira Brun. Todos los derechos reservados.</span>
//         <span className="text-xs">Contacto: brunmoira@gmail.com</span>
//     </div>
    

// </div> */}