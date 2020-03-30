import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';
import $ from 'jquery'

import {BrowserRouter as Router, Link} from "react-router-dom";


function ImageBox(props) {
    return (
        <Router>
        <article className="thumb">
            <a href={props.pageLink} className="image"><img id="stream-image" src={props.imagePath} alt=""/></a>
            <h2>{props.streamTitle}</h2>
        </article>
        </Router>
    );
}

export default ImageBox;
