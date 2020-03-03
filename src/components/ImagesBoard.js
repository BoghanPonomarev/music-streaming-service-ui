import React from 'react';

import '../style/App.css';
import '../style/main.css';
import ImageBox from './ImageBox.js';

import one from "../images/thumbs/01.jpg";
import two from "../images/thumbs/02.jpg";
import three from "../images/thumbs/03.jpg";
import four from "../images/thumbs/04.jpg";
import five from "../images/thumbs/05.jpg";
import six from "../images/thumbs/06.jpg";
import seven from "../images/thumbs/07.jpg";
import eight from "../images/thumbs/08.jpg";
import nine from "../images/thumbs/09.jpg";
import ten from "../images/thumbs/10.jpg";
import eleven from "../images/thumbs/11.jpg";
import twelve from "../images/thumbs/12.jpg";




function ImagesBoard(props) {
    return (
        <div id="main">
        <ImageBox imagePath={one}/>
            <ImageBox imagePath={two}/>
            <ImageBox imagePath={three}/>
            <ImageBox imagePath={four}/>
            <ImageBox imagePath={five}/>
            <ImageBox imagePath={six}/>
            <ImageBox imagePath={seven}/>
            <ImageBox imagePath={eight}/>
            <ImageBox imagePath={nine}/>
            <ImageBox imagePath={ten}/>
            <ImageBox imagePath={eleven}/>
            <ImageBox imagePath={twelve}/>
        </div>
    );
}

export default ImagesBoard;
