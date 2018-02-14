import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './Input';

import { login } from '../actions/loginActions';
import { required, nonEmpty } from '../validators';

export class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false
        };
    }

    onSubmit(values) {
        console.log('VALUES', values);

        this.props.dispatch(login(values));
    }

    render() {

      

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return(
            <div>
                <h1>
                LoginPage
                </h1>

                <form className='login-form' onSubmit={this.props.handleSubmit( values => this.onSubmit(values))}>

                    {error}
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
                    <button disabled={this.props.pristine || this.props.submitting}>
                      Log in
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginPage);
