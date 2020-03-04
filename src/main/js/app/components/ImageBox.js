import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';

import {BrowserRouter as Router, Link} from "react-router-dom";


function ImageBox(props) {
    return (
        <Router>
        <article className="thumb">
            <Link to="/#" component className="image"><img src={props.imagePath} alt=""/></Link>
            <h2>Magna feugiat lorem</h2>
            <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        </article>
        </Router>
    );
}

export default ImageBox;
