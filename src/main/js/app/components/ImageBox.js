import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';
import $ from 'jquery'

import {BrowserRouter as Router, Link} from "react-router-dom";


function ImageBox(props) {
    return (
        <Router>
        <article className="thumb">
        <div className="thumb-icon">lofi</div>
            <a href={props.pageLink} className="image">        
                   <img id="stream-image" src={props.imagePath} alt=""/>
            </a>
              <div className="wrapper-title">
                <h2>{props.streamTitle}</h2>
              </div>
        </article>
        </Router>
    );
}

export default ImageBox;
