const Modal = ({visible, onClose, children}) => {
    console.log('content', children)
    if (!visible) return null;

    const handleOnClose = () => {
        onClose()
    }
  
    return (
        <div onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center w-[90%] h-auto">
        <div className="bg-white p-6 rounded w-[90%] h-auto">  
            <p className="text-black text-lg text-center">{children}</p>
        </div>
          
         <button onClick={handleOnClose}>X</button>
      </div>
        );
    };
    
    export default Modal;
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