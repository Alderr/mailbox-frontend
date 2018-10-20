import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import Input from '../Input';

import { register } from '../../actions/loginActions';
import { required, nonEmpty } from '../../validators';

import './css/RegisterForm.css';

export class RegisterForm extends Component {

    onSubmit(values) {
        this.props.dispatch(register(values));
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
                <div className="form-message" aria-live="polite">
                    { message }
                </div>
            );
        }

        return(
            <section>
                <form className='register-form' onSubmit={handleSubmit( values => this.onSubmit(values))}>

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
                    <label htmlFor="firstName">First Name</label>
                    <Field
                        component={Input}
                        type="text"
                        name="firstName"
                        id="firstName"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                        component={Input}
                        type="text"
                        name="lastName"
                        id="lastName"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={ pristine || submitting}>
                  Register
                    </button>
                </form>
            </section>
        );
    }
}

export default reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) => dispatch(focus('register', 'username'))
})(RegisterForm);