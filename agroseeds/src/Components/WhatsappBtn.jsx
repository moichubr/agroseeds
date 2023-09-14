import {BsWhatsapp} from "react-icons/bs"

const WhatsappBtn = () => {

    return(
        <div className="fixed w-[60px] h-[60px] lg:bottom-[40px] bottom-[100px] lg:right-[40px] right-[50px] bg-green-600 text-white rounded-full shadow-lg z-100 flex items-center justify-center hover:bg-white hover:text-green-600">
        <a href="https://api.whatsapp.com/send?phone=+543447625497" target="_blank" rel="noreferrer">
          <i><BsWhatsapp size={40} /></i>
        </a>
      </div>
    )
}

export default WhatsappBtn