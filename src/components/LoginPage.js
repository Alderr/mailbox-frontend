import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import Input from './Input';
import LoginForm from './LoginForm';

import { login } from '../actions/loginActions';
import { required, nonEmpty } from '../validators';

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
