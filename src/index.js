import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
       
        
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);
