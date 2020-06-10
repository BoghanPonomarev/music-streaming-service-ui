import React from 'react';
import {connect} from 'react-redux';

import * as constants from 'app/constants/constants';

import '../../../../resources/static/assets/style/App.css';
import BackArrow from '../../../../resources/static/assets/fonts/arrow/back-arrow.png';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/video.css';

import ReactHLS from 'react-hls-player';
import Hls from "hls.js";
import {BrowserRouter as Router,Route,Switch, Link} from "react-router-dom";
import {StreamListLayout} from "./streamList";
import PlaylistHeader from "../PlaylistHeader";


export class StreamPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const videoProps = {
            disablePictureInPicture : true,
        };

        const hlsConfig = {
            maxBufferLength: 30,
            liveBackBufferLength: 25
        };

        return (
            <div className="App">
                <PlaylistHeader/>
                <div id="back-link-container">
                <Link id="plr-back-btn" to="/" ><img id="back-arrow-img" src={BackArrow}/></Link>
                <Switch>
                    <Route exact path="/" component={StreamListLayout} />
                </Switch>

                </div>

                <div id="video-wrapper">
                    <ReactHLS id="video"
                        url={constants.SERVER_DOMAIN + "/api/v1/streams/" + this.props.match.params.streamName + "/playlist"}
                        autoplay={true} videoProps={videoProps} hlsConfig={hlsConfig}></ReactHLS>
                </div>
            </div>
        );
    }

}

export default StreamPage;