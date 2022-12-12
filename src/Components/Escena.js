import { Container } from "./Container-style"
import { useState } from 'react'
import { Button } from "./Button-style"
import BackgroundPicture from "./BackgroundPicture"


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
    <div>
      <BackgroundPicture images={newscenes} counter={count}></BackgroundPicture>
      <div style={{position: 'fixed', width: '100%'}}>
      <Button onClick={() => restar(newscenes, numTotal)}> Anterior </Button>
      <Button onClick={() => sumar(newscenes, numTotal)}> Siguiente </Button>
      <h5>
        {newscenes.map((x, index) => (
          <div key={String(x)}>
            <Container color={index == count ? "pink" : "white"} opacity={index == count ? "1" : "0.8"}> {x.txt} </Container>
          </div>))}
      </h5>
      </div>
    </div>
       


  );
}
export default Escena;

