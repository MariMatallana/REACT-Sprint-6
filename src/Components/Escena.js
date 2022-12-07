import { Container } from "./Container-style"
import { useState } from 'react'
import { Button } from "./Button-style"


function Escena(props) {

  let newscenes = props.texto
  let numTotal = props.numeroTotal - 1

  const [count, setCount] = useState(0)

  const sumar = () => {
    if (count >= 0) {
      setCount(count + 1)
    }
    if (count == numTotal) {
      setCount(count + 0)
      alert("Estas en el final")
    }
  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert("Estas en el inicio")
    }
  }

  return (
    <>

      <Button onClick={() => restar(newscenes, numTotal)}> Anterior </Button>
      <Button onClick={() => sumar(newscenes, numTotal)}> Siguiente </Button>
      <div>
        <h5>{newscenes.map((x, index) => (
          <div key={String(x)}> 
          <Container color={index==count ? "pink": "white"}>  {x}  </Container>
        </div>))}
        </h5>
      </div>
      
    </>
  );
}
export default Escena;

