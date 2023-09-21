// import image from "../assets/IMG3.jpg"

const Image = () => {
    const image = "https://res.cloudinary.com/dqefppqdd/image/upload/v1694389958/WhatsApp_Image_2023-09-10_at_20.38.04_racapa.jpg"
    return(

        <div className="w-full ">
            <img className="max-w-full w-full" src={image} alt="servicios agricolas"/>
        </div>

       
    )
}

export default Image