import { images } from "../data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"
import {useState} from "react"
// import wallpaper from "../assets/wallpaper3.png"

const Gallery = () => {
const [currentIndex, setCurrentIndex] = useState(0)

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length -1 : currentIndex -1 //si es la 1 imagen, vuelve a la ultima, si no resta 1 a la actual
    setCurrentIndex(newIndex)
}
const nextSlide = () => {
    const isLastSlide = currentIndex === images.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
}

const goToSlide = (imgIndex) => {
    setCurrentIndex(imgIndex)
}

  return (
    <section
      id="gallery"
      className="mb-12 "
    >
      {/* <div style={{ backgroundImage: `url(${wallpaper})` }}> */}
      <div className="container flex items-center justify-center mx-auto">
        <div className="lg:max-w-[1100px] lg:h-[580px] max-w-full h-[450px]  w-full m-auto py-8 px-8 lg:py-12 lg:px-16 relative group">
        {/* <span className="text-xl font-light text-white bg-green-950 px-4 py-2 rounded-md items-center justify-center lg:p-2 lg:mt-2 lg:mb-2">Galería de imágenes</span> */}
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-contain lg:bg-cover bg-no-repeat duration-500 lg:mt-6"
      ></div>
        
        {/* left arrow  */}
        <div className="hidden group-hover:block absolute lg:top-[60%] top-[55%] -translate-x-0 translate-y-[-50%] lg:left-20 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>

        {/* right arrow  */}
        <div className="hidden group-hover:block absolute lg:top-[60%] top-[55%] -translate-x-0 translate-y-[-50%] lg:right-20 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30}  />
        </div>

        <div className="flex top-2 lg:mt-4 justify-center">
            {images.map((img, index) => (
            <div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer">
                <RxDotFilled />
                </div>))
                }
            </div>
      
      </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Gallery;
