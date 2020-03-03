import React from 'react';
import logo from './logo.svg';

import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ImagesBoard from './components/ImagesBoard.js';
import './style/App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <body className="is-preload">

      <div id="wrapper">

      <ImagesBoard/>
      <Footer/>
      </div>

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.poptrox.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>

      </body>
    </div>
  );
}

export default App;
