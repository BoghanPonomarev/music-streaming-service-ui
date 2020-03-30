import React from 'react';

import Footer from './Footer.js';
import Header from './Header.js';
import ImagesBoard from './ImagesBoard.js';
import '../../../resources/static/assets/style/App.css';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className="is-preload">

      <div id="wrapper">

      <ImagesBoard/>
      </div>

      </div>
    </div>
  );
}

export default App;
