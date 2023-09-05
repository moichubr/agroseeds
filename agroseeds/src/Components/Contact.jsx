import {BsFillTelephoneFill, BsFillPhoneFill} from "react-icons/bs"
import {MdLocationOn} from "react-icons/md"

const Contact = () => {

    return(      
        <section id="contact" className="section">
        <div className="py-6 px-4 lg:pl-28 bg-green-950 text-white flex flex-col">
            <span className="text-2xl font-light lg:p-2 lg:mt-2 lg:mb-2">Contacto</span>
            <div className="flex flex-row lg:ml-16">
            <p className="text-xl mt-2 font-light"> <span className="inline-flex"><MdLocationOn/> </span> Bvrd. Francou 1464, Villa Elisa, Entre Ríos</p>
            </div>
            <div className="flex flex-row lg:ml-16">
            <p className="text-xl mt-2 font-light"><span className="inline-flex mr-2"> <BsFillTelephoneFill/> </span>(3447) 480125</p>
            </div>
            <div className="flex flex-row lg:ml-16">
            <p className="text-xl mt-2 font-light"><span className="inline-flex mr-2 "> <BsFillPhoneFill /> </span>(3447) 15625520 (Fernando) - 15640311 (Martín)</p>
            </div>

        </div>
        </section>
    )
}

export default Contact