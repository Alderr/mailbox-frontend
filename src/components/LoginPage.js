import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { Link, Redirect } from 'react-router-dom';

import Input from './Input';
import LoginForm from './LoginForm';

import { login } from '../actions/loginActions';
import { required, nonEmpty } from '../validators';

export class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    onSubmit(values) {
        console.log('VALUES', values);
        console.log('BASE_URL', process.env.REACT_APP_BASE_URL);
        this.props.dispatch(login(values));
    }

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <div>
                <h1>
                LoginPage
                </h1>
                <LoginForm message={this.props.message} />
            </div>
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
