import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from 'react-router-dom';

import Input from './Input';

import { required, nonEmpty } from '../validators';

export class ListCreateForm extends Component {
    constructor(props){
        super(props);
    }

    onSubmit(values) {
        this.props.createNewList(values);
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
        let message;
        if (this.props.message) {
            message = (
                <div className="form-error" aria-live="polite">
                    {this.props.message}
                </div>
            );
        }

        return(
            <section>
                <form className='login-form' onSubmit={this.props.handleSubmit( values => this.onSubmit(values))}>

                    {error}
                    {message}
                    <label htmlFor="name">Name</label>
                    <Field
                        component={Input}
                        type="text"
                        name="name"
                        id="name"
                        validate={[required, nonEmpty]}
                    />
                    <button disabled={this.props.pristine || this.props.submitting}>
                  Create
                    </button>
                </form>
            </section>
        );
    }
}

export default reduxForm({
    form: 'listCreateForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(ListCreateForm);
