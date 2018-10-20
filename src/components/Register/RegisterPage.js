import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import RegisterForm from './RegisterForm';

import { resetMessage } from '../../actions/loginActions';

import './RegisterPage.css';

export class RegisterPage extends Component {

    componentWillUnmount() {
        this.props.dispatch(resetMessage());
    }

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section className='register-form-page'>
                <div className="register-form-container">
                    <h1 className='register-mailbox-nav-title'><Link to='/'> mailbox </Link></h1>
                    <RegisterForm message={this.props.message} />
                    <div className='register-link'><Link to='/login'>Log in.</Link></div>
                </div>
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

export default connect(mapStateToProps)(RegisterPage);
