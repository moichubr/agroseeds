import PropTypes from "prop-types";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Modal = ({visible, onClose, children}) => {
    // console.log('content', children)
    if (!visible) return null;

    const handleOnClose = () => {
        onClose()
    }
  
    return (
        <div onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center w-full h-auto">
        <div className="flex flex-col items-center bg-white w-[90%] p-6 rounded lg:w-[60%] h-auto">  
            <p className="text-black text-lg text-center">{children}</p>
         <div className="w-fit  justify-center mt-3 cursor-pointer" onClick={handleOnClose}><AiOutlineCloseCircle size={30} className="text-slate-500"/></div>
        </div>
          
      </div>
        );
    };
    
    
    export default Modal;
    
    Modal.propTypes = {
      visible: PropTypes.bool,
      children: PropTypes.array,
      onClose: PropTypes.func

    }

    //   <div className="fixed inset-0 flex items-center justify-center z-50">
    //     <div className="modal-container">
    //       <button className="modal-close" onClick={onClose}>
    //         X
    //       </button>
    //       <div className="modal-content">
    //         {content}
    //       </div>
    //     </div>
    //   </div>