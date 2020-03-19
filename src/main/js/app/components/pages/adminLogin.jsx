import React from 'react';
import {connect} from 'react-redux';


import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';
import '../../../../resources/static/assets/style/adminStreamList.css';
import * as constants from 'app/constants/constants';
import * as routes from 'app/constants/routes';
import $ from 'jquery'

export class AdminLogin extends React.Component {

    constructor(props){
        super(props);
        this.props = props;
        this.requestTokenCheck = this.requestTokenCheck.bind(this);
    }

    render() {
        return (
            <div id="admin-login-block">
                <form id="admin-login-form">
                    <input id="admin-token-input" type="password"/>
                </form>
                <button onClick={this.requestTokenCheck}>Login</button>
            </div>
        );
    }

    requestTokenCheck(){
        var token = {
            token: $("#admin-token-input").val()
        };
        console.log(token);
        $.ajax({
            localStorage: localStorage,
            props: this.props,
            cache:false,
            contentType: 'application/json',
            url: constants.SERVER_DOMAIN + '/api/v1/admin/login',
            data: JSON.stringify(token),
            type: 'post',
            success: function (response) {
                console.log(response);
                console.log("Success token - " + token.token);
                localStorage.setItem("token", token.token);
                this.props.history.push(routes.adminStreamList());
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    }

}

export default AdminLogin;