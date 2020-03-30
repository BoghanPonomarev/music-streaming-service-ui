import React from 'react';


import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/adminStreamPage.css';
import * as constants from 'app/constants/constants';
import $ from 'jquery'

export class AdminStreamPage extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.requestStream = this.requestStream.bind(this);
        this.readVideo = this.readVideo.bind(this);
        this.readAudio = this.readAudio.bind(this);
        this.requestUpdateVideo = this.requestUpdateVideo.bind(this);
        this.requestUpdateAudio = this.requestUpdateAudio.bind(this);
        this.requestDeleteAudio = this.requestDeleteAudio.bind(this);
        this.requestStreamStatusChange = this.requestStreamStatusChange.bind(this);
        this.requestCompileStream = this.requestCompileStream.bind(this);
        this.requestUpdateTitle = this.requestUpdateTitle.bind(this);
    }

    render() {
        return (
            <div id="stream-page">
                <h1 id="stream-title"></h1>
                 <div id="stream-status"></div><br></br>
                 <div id="stream-portion-id"></div><br></br>
                 <button id="update-stream-status-btn"></button>
                <div id="compile-stream-btn-block"></div>

                <div id="stream-title-block">
                    Consumer title name: <div id="cons-stream-title"></div>
                    <input id="stream-title-input" type="text"/>
                    <button id="update-stream-title-btn" onClick={this.requestUpdateTitle}>Update</button>
                </div>
                <div id={"animation-block"}>
                Animation: <br/><video id='admin-video' alt controls></video>
                    <div id="new-stream-video-block">
                        <input id="video-upload" type="file" accept="*/*"/>
                        <button id="update-video-btn" onClick={this.readVideo}>Update</button>
                    </div>
                </div>
                <br/>
                <div id="audio-block">
                <h3>Audios</h3>
                    <div id="new-stream-audio-block">
                        <input id="audio-upload" type="file" accept="*/*"/>
                        <button id="update-audio-btn" onClick={this.readAudio}>Add</button>
                    </div>
                </div>
                {this.requestStream()}
            </div>
        );
    }

    requestStream(){
        const token = localStorage.getItem("token");

        $.ajax({
            requestDeleteAudio: this.requestDeleteAudio,
            requestStreamStatusChange: this.requestStreamStatusChange,
            requestCompileStream: this.requestCompileStream,
            headers: {"Authorization": token},
            cache:false,
            contentType: false,
            processData: false,
            url: constants.SERVER_DOMAIN + '/api/v1/admin/playlists/' + this.props.match.params.streamName,
            type: 'get',
            success: function (response) {
                console.log(response);
                $("#stream-title").append(response.streamName);
                $("#cons-stream-title").append(response.streamTitle);
                $("#stream-status").append("Status: " + response.status);
                $("#stream-portion-id").append("Stream Portion: " + response.streamIteration);
                $("#admin-video").attr("src", constants.SERVER_DOMAIN + '/api/v1/videos/' + response.videoIdList[0]);

                var audioList = response.audioIdList;
                for(var i=0;i<audioList.length;i++) {
                    var audioId = audioList[i].id;
                    console.log("PREPARE TEXT VALUE " + audioId);
                    $("#audio-block").append("<audio id='audio-"+audioId+"' controls><source src='"+constants.SERVER_DOMAIN + '/api/v1/audios/'+ audioId +"'></source></audio>"
                     + " " + audioList[i].fileName);
                    $("#audio-block").append(" <button id='delete-audio-btn-"+audioId+"'>Delete</button></br>");
                        $("#delete-audio-btn-"+audioId).on('click', this.requestDeleteAudio.bind(this, audioId));
                }

                if(response.status === "CREATED") {
                    $("#update-stream-status-btn").append("COMPILE");
                    $("#update-stream-status-btn").on('click', this.requestStreamStatusChange.bind(this, "CREATED"));
                } else  if(response.status === "COMPILED") {
                    $("#update-stream-status-btn").append("START");
                    $("#update-stream-status-btn").on('click', this.requestStreamStatusChange.bind(this, "COMPILED"));
                } else if(response.status === "PLAYING") {
                    $("#update-stream-status-btn").append("STOP");
                }

                if(response.status !== "CREATED") {
                    $("#compile-stream-btn-block").append("<button id=\"compile-stream-btn\">Compile</button>");
                    $("#compile-stream-btn").on('click', this.requestCompileStream.bind(this));
                }
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    }

    requestCompileStream() {
        const token = localStorage.getItem('token');

        $.ajax({
            headers: {"Authorization": token},
            cache: false,
            processData: false,
            contentType: false,
            url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + this.props.match.params.streamName +"/compile",
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

    requestStreamStatusChange(status) {
        const token = localStorage.getItem('token');

        if(status === "CREATED") {
            $.ajax({
                headers: {"Authorization": token},
                cache: false,
                processData: false,
                contentType: false,
                url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + this.props.match.params.streamName +"/compile",
                type: 'post',
                success: function (response) {
                    console.log(response);
                    window.location.reload(false);
                },
                error: function(jqXHR){
                    console.log(jqXHR);
                }
            });
        } else if(status === "COMPILED"){
            $.ajax({
                headers: {'Authorization': token},
                cache: false,
                processData: false,
                contentType: false,
                url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + this.props.match.params.streamName +"/play",
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

    readVideo() {
        var input = $("#video-upload");
        if (input[0] && input[0].files[0]) {
            this.requestUpdateVideo(input[0].files[0]);
        }
    }

    readAudio() {
        var input = $("#audio-upload");
        if (input[0] && input[0].files[0]) {
            this.requestUpdateAudio(input[0].files[0]);
        }
    }

    requestUpdateVideo(video){
        var videoData = new FormData();
        videoData.append('video', video);
        const token = localStorage.getItem('token');

        $.ajax({
            headers: {'Authorization': token},
            cache: false,
            processData: false,
            contentType: false,
            header: {"Content-type" : "multipart/form-data"},
            data: videoData,
            url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + this.props.match.params.streamName +"/video",
            type: 'put',
            success: function (response) {
                console.log(response);
                window.location.reload(false);
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    }

    requestUpdateAudio(audio){
        var videoData = new FormData();
        videoData.append('audio', audio);
        const token = localStorage.getItem('token');

        $.ajax({
            headers: {'Authorization': token},
            cache: false,
            processData: false,
            contentType: false,
            header: {"Content-type" : "multipart/form-data"},
            data: videoData,
            url: constants.SERVER_DOMAIN + '/api/v1/admin/streams/' + this.props.match.params.streamName +"/audio",
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

    requestDeleteAudio(audioId) {
        const token = localStorage.getItem('token');

        $.ajax({
            headers: {'Authorization': token},
            audioId: audioId,
            cache: false,
            processData: false,
            contentType: false,
            url: constants.SERVER_DOMAIN + '/api/v1/admin/audios/' + audioId,
            type: 'delete',
            success: function (response) {
                console.log(response);
                console.log("Value: " + audioId);
                $("#audio-"+audioId).remove();
                $("#delete-audio-btn-"+audioId).remove();
                window.location.reload(false);
            },
            error: function(jqXHR){
                console.log("Error" + jqXHR);
            }
        });
    }

    requestUpdateTitle() {
        const token = localStorage.getItem('token');
        const streamTitle = {
          streamTitle: $("#stream-title-input").val()
        };

        $.ajax({
            headers: {'Authorization': token},
            cache: false,
            processData: false,
            contentType: 'application/json',
            data: JSON.stringify(streamTitle),
            url: constants.SERVER_DOMAIN + "/api/v1/admin/playlists/"+ this.props.match.params.streamName+"/title",
            type: 'put',
            success: function (response) {
                window.location.reload(false);
            },
            error: function(jqXHR){
                console.log("Error" + jqXHR);
            }
        });
    }
}

export default AdminStreamPage;