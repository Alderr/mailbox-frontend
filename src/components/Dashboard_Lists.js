import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from './requires-login-gate';

import { getDashboard } from '../actions/userActions';

export class DashboardLists extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getDashboard(this.props.userId));
    }

    render() {
        return(
            <section>
                <h1> Lists </h1>
                <Link to='/dashboard/lists/create'> Create </Link>
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message,
        userId: Reducers.loginReducer.userId
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardLists));
