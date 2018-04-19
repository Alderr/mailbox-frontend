import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import './css/LoginPage.css';

export class LoginPage extends Component {

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section className='login-form-page'>
                <h1 className='mailbox-nav-title'><Link to='/'> mailbox </Link></h1>
                <LoginForm className='login-form' message={this.props.message} />
                <Link className='sign-up-link' to='/register'>Sign up.</Link>
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
