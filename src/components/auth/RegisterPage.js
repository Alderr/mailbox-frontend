import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegisterForm from './RegisterForm';

import { register } from '../../actions/loginActions';

export class RegisterPage extends Component {

    render() {

        if (this.props.loggedIn) {
            return <Redirect to='/dashboard' />;
        }

        return(
            <section>
                <h1> Register </h1>
                <RegisterForm message={this.props.message} />
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
