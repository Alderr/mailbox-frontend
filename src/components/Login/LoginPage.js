import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import { resetMessage } from '../../actions/loginActions';

import './css/LoginPage.css';

export class LoginPage extends Component {
    componentWillUnmount() {
        this.props.dispatch(resetMessage());
    }
    
    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section className='login-form-page'>
                <h1 className='signup-mailbox-nav-title'><Link to='/'> mailbox </Link></h1>
                <LoginForm message={this.props.message} />
                <div className='signup-link'><Link to='/register'>Register.</Link></div>
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

export default connect(mapStateToProps)(LoginPage);
