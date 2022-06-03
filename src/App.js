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
      <div>To continue for the cause, </div>
      <a className="sign-up-btn">Sign Up!</a>
     </div>
     </div>


   </div>
  );
}

export default App
