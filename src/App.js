
import './App.css';
import './Components/Escena.js'
import { Escena } from './Components/Escena.js'
import { Button } from "./Components/Button-style.js"

function App() {

  return (
  <div className='App'>
    <header>
    <Button> Anterior </Button>
    <Button> Siguiente </Button>
    </header>
    <body>
    <Escena/>
    </body>
  </div>
  );
}

export default App;
