import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from '../requires-login-gate';

import { logout } from '../../actions/loginActions';

import './MainView.css';

export class MainView extends Component {
    
    render() {

        return(
            <div>
                <div className='nav-bar'>
                    <Link to='/'><div className='nav-bar-title'>mailbox</div></Link>
                    <div className='subtitle-container'>
                        <Link to='/dashboard'><div className='nav-bar-subtitle'>dashboard</div></Link>
                        <Link to='/dashboard/lists'><div className='nav-bar-subtitle'>lists</div></Link>
                        <Link to='/dashboard/campaigns'><div className='nav-bar-subtitle'>campaigns</div></Link>
                    </div>
                </div>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: payload => dispatch(logout(payload)), 
    };
};

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message,
        userId: Reducers.loginReducer.userId
    };
};

export default loginGate()(connect(mapStateToProps, mapDispatchToProps)(MainView));
