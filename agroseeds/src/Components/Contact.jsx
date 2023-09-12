import {BsFillTelephoneFill, BsFillPhoneFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

const Contact = () => {

    return(      
        <section id="contact" className="section lg:mt-16">
            

            <div className="lg:grid lg:grid-cols-2 w-full h-auto p-3">
               
        <div className="col-span-1 py-6 px-8 text-green-950 flex flex-col lg:pb-8 pb-6">
        <span className="text-xl text-green-950 lg:text-2xl font-semibold lg:mx-auto">Medios de contacto</span>
           <div className="lg:ml-[10%]">
            <div className="flex flex-row lg:ml-16 mt-6">
            <p className="text-md mt-2 font-medium"> <span className="inline-flex"><MdLocationOn size={25}/> </span> Bvrd. Francou 1464 - Villa Elisa, Entre Ríos</p>
            </div>
            <div className="flex flex-row lg:ml-16 mt-6">
            <p className="text-md mt-2 font-medium"><span className="inline-flex mr-2"> <BsFillTelephoneFill size={25} /> </span>(03447) 480125</p>
            </div>
            <div className="flex flex-row lg:ml-16 mt-6">
            <span className="inline-flex mr-2 mt-3"> <BsFillPhoneFill size={25}/> </span>
            <div>
            <p className="text-md mt-2 font-medium ">(03447) 15625520 (Fernando)</p>
            <p className="text-md mt-2 font-medium ">(03447) 15640311 (Martín)</p>
            </div>
            </div>
            </div>

            </div>

            <div className="col-span-1 p-4 w-[90%] h-full mx-auto">
                <iframe
            width="100%"
            height="100%"
            title="map"
            className="z-10 "
            src="https://www.google.com/maps/embed/v1/place?q=Boulevard+Francou+1464,+Villa+Elisa,+Entre+Ríos,+Argentina&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

                </div>
        </div>
        </section>
    )
}

export default Contact