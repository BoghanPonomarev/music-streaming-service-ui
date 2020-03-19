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
        this.requestDeleteStream = this.requestDeleteStream.bind(this);
    }

    render() {
        const token = localStorage.getItem("token");
        console.log("RENDER TOKEN: " + token);
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
        const token = localStorage.getItem('token');

        $.ajax({
            requestDeleteStream: this.requestDeleteStream,
            headers: {'Authorization': token},
            url: constants.SERVER_DOMAIN + '/api/v1/playlists',
            type: 'get',
            success: function (response) {
                console.log(response);
                for(var i=0;i<response.length;i++) {
                    var streamName = response[i].streamName;
                    console.log(streamName);
                    $("#stream-list").append("<a href='/"+  publicPath +"/admin/streams/" + streamName +"' >" + streamName + "</a> status:" + response[i].status);
                    $("#stream-list").append("<button id='delete-stream-btn-"+streamName+"'>Delete</button> </br>");
                    $("#delete-stream-btn-"+streamName).on('click', this.requestDeleteStream.bind(this, streamName));
                }
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    }

    requestNewStreamCreation() {
        var token = localStorage.getItem('token');

        $.ajax({
            url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + $("#new-stream-name").val(),
            type: 'post',
            headers: { "Authorization": token},
            success: function (response) {
                console.log(response);
                window.location.reload(false);
            },
            error: function(jqXHR){
                console.log(jqXHR);

            }
        });
    }

    requestDeleteStream(streamName) {
        const token = localStorage.getItem('token');

        $.ajax({
            requestDeleteStream: this.requestDeleteStream,
            headers: {'Authorization': token},
            url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + streamName,
            type: 'delete',
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