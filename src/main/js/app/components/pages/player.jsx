import React from 'react';
import {connect} from 'react-redux';

import * as constants from 'app/constants/constants';

import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/video.css';

import ReactHLS from 'react-hls-player';
import Hls from "hls.js";
import {BrowserRouter as Router,Route,Switch, Link} from "react-router-dom";
import {HomeLayout} from "./home";
import Header from "../Header";


export class Player extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="App">
                <Header/>

                <Link to="/application" >Back</Link>
                <Switch>
                    <Route exact path="/application" component={HomeLayout} />
                </Switch>

                <div id="video-wrapper">
                    <ReactHLS
                        url={constants.SERVER_DOMAIN + "/api/v1/streams/" + this.props.match.params.streamName + "/playlist"}
                        autoplay={true}/>
                </div>
            </div>
        );
    }
}

export default Player;