import { Container, ContainerPink } from "./Container-style"
import { useState, useEffect } from 'react'
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
    }

  }

  const restar = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }


  return (
    <>

      <Button onClick={() => restar(newscenes, numTotal)}> Anterior </Button>
      <Button onClick={() => sumar(props.texto, numTotal)}> Siguiente </Button>
      <div>
        <h5>{newscenes.map((x) => (
          <div key={String(x)}>
            <Container>{x}</Container>
          </div>))}
        </h5>
      </div>

      <p>{count}</p>
    </>
  );


}
export default Escena;

