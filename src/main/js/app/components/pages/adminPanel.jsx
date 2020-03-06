import React from 'react';
import {connect} from 'react-redux';

import '../../../../resources/static/assets/style/App.css';
import '../../../../resources/static/assets/style/main.css';


export function AdminPanel() {

    return (
        <div>

        </div>
    );
}


const mapStateToProps = state => ({
    value: state.state.value
});

export default connect(mapStateToProps)(AdminPanel);