import React from 'react';
import {connect} from 'react-redux';

import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';

export function Play() {

    return (
        <div>
            <link href="https://vjs.zencdn.net/7.2.3/video-js.css" rel="stylesheet"/>

            <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
            <video id="video" width="420" height="310" controls></video>
            <script>
                {setUpHls()}
            </script>
        </div>
    );
}

export function setUpHls() {

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

export default connect(mapStateToProps)(Play);