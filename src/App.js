import React from 'react';
import './App.css';
import './Components/Escena.js'
import Escena  from './Components/Escena.js'
import { useState, useEffect } from 'react'


function App() {

  const scenes = [
    "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
    "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
    "El héroe decidió atravesar la puerta que le llevaba a casa",
    "Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."
  ]

  return (
  <div className='App'>
    <Escena texto={scenes} numeroTotal={scenes.length}/>
  </div>
  );
}

export default App;
