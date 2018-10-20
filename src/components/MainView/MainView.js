import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from '../requires-login-gate';

import { logout } from '../../actions/loginActions';

import './MainView.css';

export class MainView extends Component {
    
    whichToHighlight = () => {
        const title = this.props.location.pathname.substring(11);

        switch(title) {
        case '': 
            return { 'dashboard': 1 };
        case 'lists':
            return { 'lists': 1 };
        case 'campaigns':
            return { 'campaigns': 1 };
        default:
            return {};
        }
    } 

    render() {
        const highlight = this.whichToHighlight();
 
        return(
            <div>
                <div className='nav-bar'>
                    <Link to='/'><div className='nav-bar-title'>mailbox</div></Link>
                    <div className='subtitle-container'>
                        <Link to='/dashboard'><div className={`${highlight.dashboard ? 'highlight' : ''} nav-bar-subtitle`}>dashboard</div></Link>
                        <Link to='/dashboard/lists'><div className={`${highlight.lists ? 'highlight' : ''} nav-bar-subtitle`}>lists</div></Link>
                        <Link to='/dashboard/campaigns'><div className={`${highlight.campaigns ? 'highlight' : ''} nav-bar-subtitle`}>campaigns</div></Link>
                    </div>
                </div>
                <button className='logout-button' onClick={this.props.logout}>Log Out</button>
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
