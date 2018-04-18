import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import loginGate from './requires-login-gate';

import { getDashboard } from '../actions/userActions';


export class Dashboard extends Component {

    componentWillMount() {
        this.props.dispatch(getDashboard(this.props.userId));
    }

    render() {      
        const { recentCampaigns, totalSubscribers } = this.props.summary;

        return(
            <div>
                <h1>
          Dashboard.js
                </h1>
            </div>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message,
        userId: Reducers.loginReducer.userId,
        summary: Reducers.userReducer.dashboardData
    };
};

export default loginGate()(connect(mapStateToProps)(Dashboard));
