
export const Escena = ( props ) => {

console.log (props)

const scenes = [
  "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
  "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
  "El héroe decidió atravesar la puerta que le llevaba a casa",
  "Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."
]

let newscenes = scenes.map(getscenes)

function getscenes(e) {
  return e
}


  return (
    <>
      <h1>{props.title}</h1>
      <p> {newscenes[0]} </p>
      <p> {newscenes[1]} </p>
      <p> {newscenes[2]} </p>
      <p> {newscenes[3]} </p>
    
    </>
  );

  
}

