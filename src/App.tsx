import React from 'react';
import logo from './assets/carbonator_logo.svg';
import './App.css';
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header className="app-header bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center text-decoration-none">
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center">
              <li className="nav-item">
                <a href="#about" className="nav-link px-2 text-secondary">About</a>
              </li> 
              <li className="nav-item">
                <a href="#roadmap" className="nav-link px-2 text-secondary">Roadmap</a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link px-2 text-secondary">Team</a>
              </li>
              <li className="nav-item">
                <a href="#community" className="nav-link px-2 text-secondary">Community</a>
              </li>
            </ul>
          </div>
        
        </div>
        
      </header>
    </div>
  );
}

export default App;
