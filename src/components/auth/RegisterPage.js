import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import './css/RegisterPage';

export class RegisterPage extends Component {

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section>
                <h1><Link to='/'> Mailbox </Link></h1>
                <h3> Register </h3>
                <RegisterForm message={this.props.message} />
                <p>Already have an account? <Link to='/login'>Sign in.</Link></p>
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
