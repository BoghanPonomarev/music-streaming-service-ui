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
    }

    render() {
        return (
            <div id="stream-page">
                <h1 id="stream-title"></h1>
                <div id="stream-status"></div>
                {this.requestStream()}
            </div>
        );
    }

    requestStream(){

        $.ajax({
            cache:false,
            contentType: false,
            processData: false,
            url: constants.SERVER_DOMAIN + '/api/v1/playlists/' + this.props.match.params.streamName,
            type: 'get',
            success: function (response) {
                console.log(response);
                $("#stream-title").append(response.streamName)
                $("#stream-status").append("Status: " + response.status)
            },
            error: function(jqXHR){
                console.log(jqXHR);

            }
        });
    }

}

export default AdminStreamPage;