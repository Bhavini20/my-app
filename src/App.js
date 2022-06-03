//import logo from './logo.svg';
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Navbars from './components/Navbars'
import Navbar from 'react-bootstrap/Navbar';
import AnimatedText from 'react-animated-text-content';

function App() {
  return (
   <div >
    
     <div className="App-header">
      <p style={{marginTop:'250px', fontSize:'2.5rem' , textAlign:'center', fontStyle:'italic'}}>"To reach real peace in the world, we will have to begin with the children."</p>
      <b><p>- Mahatma Gandhi</p></b>
      <div className='sign-up-field'>
      <div className="log w3-animate-bottom" style={{color:"black"}}>TO CONTINUE FOR THE CAUSE -  </div>
      <a className="sign-up-btn">SIGN UP!</a>
     </div>
     </div>


   </div>
  );
}

export default App
