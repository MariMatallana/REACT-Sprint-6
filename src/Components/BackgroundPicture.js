import Escena from "./Escena";

function BackgroundPicture(props) {

    const img = props.images
    const num = props.counter


    const myStyle = {
        backgroundImage: `url(${img[num].img})`,
        height: '100%',
        backgroundSize: 'cover',
        position: 'fixed',
        width: '100%',
    };

    return (

        <div style={myStyle}> </div>

    )


}

export default BackgroundPicture;