import {BsFillTelephoneFill, BsFillPhoneFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

const Contact = () => {

    return(      
        <section id="contact" className="section lg:mt-16">
        <div className="py-6 px-6  bg-green-950 text-white flex flex-col lg:pb-8 pb-16">
            <span className="text-xl lg:text-6xl text-center font-semibold lg:p-2 lg:mt-2">CONTACTO</span>
           <div className="lg:ml-[10%]">
            <div className="flex flex-row lg:ml-16 mt-6">
            <p className="text-md mt-2 font-light"> <span className="inline-flex"><MdLocationOn size={25}/> </span> Bvrd. Francou 1464 - Villa Elisa, Entre Ríos</p>
            </div>
            <div className="flex flex-row lg:ml-16 mt-6">
            <p className="text-md mt-2 font-light"><span className="inline-flex mr-2"> <BsFillTelephoneFill size={25} /> </span>(03447) 480125</p>
            </div>
            <div className="flex flex-row lg:ml-16 mt-6">
            <span className="inline-flex mr-2 mt-3"> <BsFillPhoneFill size={25}/> </span>
            <div>
            <p className="text-md mt-2 font-light ">(03447) 15625520 (Fernando)</p>
            <p className="text-md mt-2 font-light ">(03447) 15640311 (Martín)</p>
            </div>
            </div>
            </div>


        </div>
        </section>
    )
}

export default Contact