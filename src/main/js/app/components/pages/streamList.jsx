import React from 'react';
import {connect} from 'react-redux';

import App from "../App";

export function StreamListLayout() {

    return (
        <App/>
    );
}

const mapStateToProps = state => ({
    value: state.state.value
});

export default connect(mapStateToProps)(StreamListLayout);