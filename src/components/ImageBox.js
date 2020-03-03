import React from 'react';

import '../style/App.css';
import '../style/main.css';


function ImageBox(props) {
    return (
        <article className="thumb">
            <a href="../images/fulls/01.jpg" className="image"><img src={props.imagePath} alt=""/></a>
            <h2>Magna feugiat lorem</h2>
            <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
        </article>
    );
}

export default ImageBox;
