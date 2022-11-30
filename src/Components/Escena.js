import { Container} from "./Container-style"
export const Escena = () => {

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
    <div>
      <Container>
        <p>{newscenes[0]}</p>
      </Container>
    </div>
    <div>
      <Container>
      <p>{newscenes[1]}</p>
      </Container>
    </div>
    <div>
      <Container>
      <p>{newscenes[2]}</p>
      </Container>
    </div>
    <div>
      <Container>
      <p>{newscenes[3]}</p>
      </Container>
    </div>
  
    </>
  );

  
}

