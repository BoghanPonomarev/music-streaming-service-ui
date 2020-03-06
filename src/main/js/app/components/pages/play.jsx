import React from 'react';
import {connect} from 'react-redux';

import playButton from '../../../../resources/static/assets/images/play-button.png';

import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/video.css';
import Hls from "hls.js";
import $ from "jquery"

export function Player() {

    return (
        <div>
            <link href="https://vjs.zencdn.net/7.2.3/video-js.css" rel="stylesheet"/>

            <div id="video-wrapper">
            <video id="video"></video>

            <div id="controls">
                <button id="playpause" className="paused"><img src={playButton} ></img> </button>
            </div>
            </div>
            <script>
                {setUpHls()}
            </script>
        </div>
    );
}

export function setUpHls() {
    $(document).ready(function(){
        var controls = {
            video: $("#video"),
            playpause: $("#playpause")
        };

        var video = document.getElementById('video');

        controls.playpause.click(function(){
            if (video.paused) {
                console.log("Pause");
                video.play();
                $(this).text("Pause");
            } else {
                console.log("Play");
                video.pause();
                $(this).text("Play");
            }

            $(this).toggleClass("paused");
        });
    });

    if (Hls.isSupported()) {
        var video = document.getElementById('video');

        var hls = new Hls();
        hls.loadSource('http://localhost:8080/api/v1/playlist');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
            console.log("MANIFEST_PARSED");
            video.play();
        });

    }
}

const mapStateToProps = state => ({
    value: state.state.value
});

export default connect(mapStateToProps)(Player);