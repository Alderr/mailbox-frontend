import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

import { login } from '../actions/loginActions';

export class LoginPage extends Component {


    onSubmit(values) {
        this.props.dispatch(login(values));
    }

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section>
                <h1> LoginPage </h1>
                <LoginForm message={this.props.message} />
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
