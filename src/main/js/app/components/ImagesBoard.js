import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';
import ImageBox from './ImageBox.js';

import one from "../../../../main/resources/static/assets/images/thumbs/01.jpg";
import two from "../../../../main/resources/static/assets/images/thumbs/02.jpg";
import three from "../../../../main/resources/static/assets/images/thumbs/03.jpg";
import four from "../../../../main/resources/static/assets/images/thumbs/04.jpg";
import five from "../../../../main/resources/static/assets/images/thumbs/05.jpg";
import six from "../../../../main/resources/static/assets/images/thumbs/06.jpg";
import seven from "../../../../main/resources/static/assets/images/thumbs/07.jpg";
import eight from "../../../../main/resources/static/assets/images/thumbs/08.jpg";
import nine from "../../../../main/resources/static/assets/images/thumbs/09.jpg";
import ten from "../../../../main/resources/static/assets/images/thumbs/10.jpg";
import eleven from "../../../../main/resources/static/assets/images/thumbs/11.jpg";
import twelve from "../../../../main/resources/static/assets/images/thumbs/12.jpg";



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
