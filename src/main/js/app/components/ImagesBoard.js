import React from 'react';

import '../../../resources/static/assets/style/App.css';
import '../../../resources/static/assets/style/main.css';
import ImageBox from './ImageBox.js';
import * as constants from 'app/constants/constants';
import $ from 'jquery'


export class ImagesBoard extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.requestAvailableStreamList = this.requestAvailableStreamList.bind(this);
        this.refreshWithData = this.refreshWithData.bind(this);

        this.state = {
            isReady: false,
            streamList: []
        };

        if (!this.state.isReady) {
        this.requestAvailableStreamList();
        }
    }

    render() {
        return (
            <div id="main">
                {
                    this.state.streamList
                }
            </div>
        );
    }

    requestAvailableStreamList() {
        $.ajax({
            refreshWithData: this.refreshWithData,
            isReady: this.state.isReady,
            streamList: this.state.streamList,
            cache: false,
            contentType: false,
            processData: false,
            url: constants.SERVER_DOMAIN + '/api/v1/playlists?allowedStatuses=PLAYING',
            type: 'get',
            success: function (response) {
                console.log(response);
                for (var i = 0; i < response.length; i++) {
                    var streamName = response[i].streamName;
                    console.log("Iteration val - " +  streamName);
                    this.streamList.push(<ImageBox pageLink={"/application/streams/" + streamName} imagePath={constants.SERVER_DOMAIN + "/api/v1/streams/" + streamName + "/pr"}/>);
                }
                this.refreshWithData(this.streamList);
            },
            error: function (jqXHR) {
                console.log(jqXHR);
            }
        });
    }

    refreshWithData(streamList) {
        this.setState(()=> {
            return {
                isReady:true,
                streamList:streamList,
            } ;
        });
    }

}


export default ImagesBoard;
