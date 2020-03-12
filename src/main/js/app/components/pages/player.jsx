import React from 'react';
import {connect} from 'react-redux';

import * as constants from 'app/constants/constants';

import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/video.css';

import ReactHLS from 'react-hls-player';
import Hls from "hls.js";
import {BrowserRouter as Router, Link} from "react-router-dom";

export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.setUpHls = this.setUpHls.bind(this);
    }

    render() {
        return (
            <div>

                <link href="https://vjs.zencdn.net/7.2.3/video-js.css" rel="stylesheet"/>
                <Router>
                    <Link to="/application" component >back</Link>
                </Router>

                <div id="video-wrapper">
                    <ReactHLS
                        url={constants.SERVER_DOMAIN + "/api/v1/streams/" + this.props.match.params.streamName + "/playlist"}
                        autoplay='true'/>
                </div>
            </div>
        );
    }


    setUpHls() {
        if (Hls.isSupported()) {
            var video = document.getElementById('video');

            var hls = new Hls();
            hls.loadSource(constants.SERVER_DOMAIN + "/api/v1/streams/" + this.props.match.params.streamName + "/playlist");
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                console.log("MANIFEST_PARSED");
                video.play();
            });

        }
    }
}

export default Player;