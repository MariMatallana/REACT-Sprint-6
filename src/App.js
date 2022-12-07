import React from 'react';
import './App.css';
import './Components/Escena.js'
import Escena  from './Components/Escena.js'
import { useState } from 'react'
import { Container } from "./Components/Container-style"


function App() {

  const [page, setPage] = useState(true)

  // const start = () => {
  //   setPage(false)
  // }

  const scenes = [
    "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
    "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
    "El héroe decidió atravesar la puerta que le llevaba a casa",
    "Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."
  ]

  return (
  <div className='App'>

    {
      page 
      ? <Container> ¡Bienvenido! A través de este tutorial descubrirás algunos consejos que puedes poner en práctica en el trabajo. Los consejos tienen una secuencia que debes seguir para que sean de mejor ayuda.</Container>
     
      :<Escena texto={scenes} numeroTotal={scenes.length}></Escena>

    }
    <button onClick={() => setPage(!page)} disabled={!page}>Empezar</button>
  </div>
  );
}

export default App;
