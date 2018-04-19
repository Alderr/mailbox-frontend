import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import LoginForm from './LoginForm';

export class LoginPage extends Component {

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section>
                <h1><Link to='/'> Mailbox </Link></h1>
                <h3> Login </h3>
                <LoginForm message={this.props.message} />
                <p>Need an account? <Link to='/register'>Register.</Link></p>
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
