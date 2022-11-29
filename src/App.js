import logo from './logo.svg';
import './App.css';
import './Components/Escena/Escena.js'
import { Escena } from './Components/Escena/Escena.js';
import { Button } from './Components/Button-style.js'
import { Container } from "./Components/Container-style.js"

function App() {

  

  return (
  <>
  <div>
    <Button> Anterior </Button>
    <Button> Siguiente </Button>
  </div>
  <div>
    <Container className='container1'>
      <Escena className='escena'/> 
    </Container>
  </div>
  <div>
    <Container className='container2'>
      
    </Container>
  </div>
  <div>
    <Container className='container'>
      
    </Container>
  </div>
  <div>
    <Container className='container'>
      
    </Container>
  </div>
    

    
    
  </>
  );
}

export default App;
