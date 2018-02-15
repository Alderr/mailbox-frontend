import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

export class DashboardCampaignCreate extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <h1> Campaign - Create </h1>
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardCampaignCreate));
