import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from '../Input';

import { login } from '../../actions/loginActions';
import { required, nonEmpty } from '../../validators';

import './css/LoginForm.css';

export class LoginForm extends Component {

    onSubmit(values) {
        this.props.dispatch(login(values));
    }

    render() {
        const { error, message, handleSubmit, pristine, submitting } = this.props;

        let errorSection;
        if (error) {
            errorSection = (
                <div className="form-error" aria-live="polite">
                    { error }
                </div>
            );
        }
        let messageSection;
        if (message) {
            messageSection = (
                <div className="form-error" aria-live="polite">
                    { message }
                </div>
            );
        }

        return(
            <section>
                <form className='login-form' onSubmit={handleSubmit( values => this.onSubmit(values))}>

                    {errorSection}
                    {messageSection}
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
                    <button disabled={ pristine || submitting}>
                  Log in
                    </button>
                </form>
            </section>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);