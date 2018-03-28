import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import loginGate from './requires-login-gate';


export class MainView extends Component {

    render() {

        return(
            <div>
                <div className='sideBar'>
                    <h3><Link to='/dashboard'>Dashboard</Link></h3>
                    <h3><Link to='/dashboard/lists'>Lists</Link></h3>
                    <h3><Link to='/dashboard/campaigns'>Campaigns</Link></h3>
                </div>
                <button><Link to='/'>Go Home</Link></button>
                <button><Link to='/loginPage'>Log Out</Link></button>
            </div>
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

export default loginGate()(connect(mapStateToProps)(MainView));