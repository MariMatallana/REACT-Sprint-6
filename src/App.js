import React from 'react';
import './App.css';
import './Components/Escena.js'
import Escena  from './Components/Escena.js'
import { useState } from 'react'
import { Container } from "./Components/Container-style"
import uno from './img/uno.jpg'
import dos from './img/dos.jpg'
import tres from './img/tres.jpg'
import cuatro from './img/cuatro.jpg'

function App() {

  const [page, setPage] = useState(true)

  const scenes = [
   { "txt" : "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
      "img" : uno
    },
    { "txt" : "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
    "img" : dos
    },
    { "txt" : "El héroe decidió atravesar la puerta que le llevaba a casa",
    "img" : tres
    },
    { "txt" : "Mientras tanto, otros héroes no tuvieron tanta suerte en su elección...",
    "img" : cuatro
    },
  ]

  return (

  <div className='App'> 
  

    {
      page 
      ? 
      <Container> ¡Bienvenido! A través de este tutorial descubrirás algunos consejos que puedes poner en práctica en el trabajo. Los consejos tienen una secuencia que debes seguir para que sean de gran ayuda.</Container>
      :<Escena texto={scenes} numeroTotal={scenes.length}></Escena>
    }
    <button onClick={() => setPage(!page)} hidden={!page}>Empezar</button>

    
  </div>
  
  );
}

export default App;
