import React from 'react';
import {connect} from 'react-redux';


import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/adminStreamList.css';
import * as constants from 'app/constants/constants';
import $ from 'jquery'
import {BrowserRouter as Router, Link} from "react-router-dom";

const publicPath = process.env.ASSET_PATH;

export class AdminStreamsList extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.requestStreamList = this.requestStreamList.bind(this);
        this.requestNewStreamCreation = this.requestNewStreamCreation.bind(this);
    }

    render() {
        return (
            <div id="admin-stream-list-wrapper">
            <div id="stream-list">
                <h1>Stream list</h1>
                {this.requestStreamList()}
            </div>
                <div id="new-stream-block">
                    <h1>Create new stream</h1>
                    <form id="new-stream-form">
                        Stream name: <input id="new-stream-name"/>
                    </form>
                <button id="add-new-stream-btn" onClick={this.requestNewStreamCreation}>submit</button>
                </div>
            </div>
        );
    }

    requestStreamList(){
        $.ajax({
            cache:false,
            contentType: false,
            processData: false,
            url: constants.SERVER_DOMAIN + '/api/v1/playlists',
            type: 'get',
            success: function (response) {
                console.log(response);
                for(var i=0;i<response.length;i++) {
                    var streamName = response[i].streamName;
                    console.log(streamName);
                    $("#stream-list").append("<a href='/"+  publicPath +"/admin/streams/" + streamName +"' >" + streamName + "</a> status:" + response[i].status + "<br>")
                }
            },
            error: function(jqXHR){
                console.log(jqXHR);

            }
        });
    }

    requestNewStreamCreation() {
        $.ajax({
            cache:false,
            contentType: false,
            processData: false,
            url: constants.SERVER_DOMAIN + '/api/v1/streams/' + $("#new-stream-name").val(),
            type: 'post',
            success: function (response) {
                console.log(response);
                window.location.reload(false);
            },
            error: function(jqXHR){
                console.log(jqXHR);

            }
        });
    }
}

export default AdminStreamsList;