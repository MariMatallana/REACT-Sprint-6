import React from 'react';
import './App.css';
import './Components/Escena.js'
import { Escena } from './Components/Escena.js'
import { Button } from "./Components/Button-style.js"
import { useState, useEffect } from 'react'


function App() {


  const [count, setCount] = useState(0)

  useEffect(() => {
    
  })

  return (
  <div className='App'>
    <header>
    <Button onClick={() => setCount(count -1)}> Anterior </Button>
    <Button onClick={() => setCount(count +1)}> Siguiente </Button>
    </header>
    <body>
    <Escena/>
    </body>
    <p>{count}</p>
  </div>
  );
}

export default App;
