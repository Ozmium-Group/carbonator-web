import React from 'react';
import logo from './assets/carbonator_logo.svg';
import './App.css';
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        
      </header>
    </div>
  );
}

export default App;
