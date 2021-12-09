import React, { useState, useEffect } from 'react';
import logo from './assets/carbonator_logo_color.svg';
import './App.css';
// add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

import AppHeader from './components/header.js';
import AppFooter from './components/footer.js';


const axios = require('axios').default;

function App() {

  const [ethGas, setEthGas] = useState(0);

  useEffect( () => {
    getEthGas();
  })

  const getEthGas = async () => {
    const res = await axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    console.log("data: ", res.data);
    setEthGas(res.data.average);
  }

  return (
    <div className="App">
     <AppHeader />
     <section>
        data: {ethGas}

    </section>
    <AppFooter />
    </div>
  );
}

export default App;
