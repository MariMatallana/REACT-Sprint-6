import Escena from "./Escena";

function BackgroundPicture(props) {

    const img = props.images
    const num = props.counter

    console.log(img, num)

    return (

        <div background={img[num]}></div>
    
        )


}

export default BackgroundPicture;