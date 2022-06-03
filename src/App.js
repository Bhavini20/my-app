//import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Navbars from './Navbars'
import Navbar from 'react-bootstrap/Navbar';
import AnimatedText from 'react-animated-text-content';

function App() {
  return (
   <div >
     <Navbars />
     <div className="App-header">
      <p style={{marginTop:'250px', fontSize:'2.5rem' , textAlign:'center', fontStyle:'italic'}}>"To reach real peace in the world, we will have to begin with the children."</p>
      <b><p>- Mahatma Gandhi</p></b>
     </div>

   </div>
  );
}

export default App
