import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './Input';

import { required, nonEmpty } from '../validators';

export class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    onSubmit() {

    }

    render() {
        return(
            <div>
                <h1>
                LoginPage
                </h1>

                <button><Link to='/dashboard'>Go To Dashboard</Link></button>
                <form className='login-form' onSubmit={this.props.handleSubmit( values => this.onSubmit(values))}>
                
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />

                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginPage);
