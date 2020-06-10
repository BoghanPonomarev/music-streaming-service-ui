import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';
import {Link, Route, Switch} from "react-router-dom";
import BackArrow from "../../../resources/static/assets/fonts/arrow/back-arrow.png";
import {StreamListLayout} from "./pages/streamList";


function PlaylistHeader(props) {
    return (
        <div>
            <header id="header">
                <div id="back-link-container-btm">
                    <Link id="plr-back-btn" to="/" ><img id="back-arrow-img" src={BackArrow}/></Link>
                    <Switch>
                        <Route exact path="/" component={StreamListLayout} />
                    </Switch>

                </div>
                <h1><a href="/"><strong>Nine Sounds</strong></a></h1>
            </header>
        </div>
    );
}

export default PlaylistHeader;
