import React from 'react';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ImagesBoard from './components/ImagesBoard.js';
import './style/App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className="is-preload">

      <div id="wrapper">

      <ImagesBoard/>
      <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
