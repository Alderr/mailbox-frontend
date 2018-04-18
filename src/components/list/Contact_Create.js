import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginGate from '../requires-login-gate';
import ContactCreateForm from './Contact_CreateForm';

import { createContact } from '../../actions/userActions';

export class ContactCreate extends Component {
    constructor(props){
        super(props);

        this.createContact = this.createContact.bind(this);
        this.moveToListIdScreen = this.moveToListIdScreen.bind(this);
    }

    createContact(data) {
        this.props.dispatch(createContact(this.props.userId, this.props.listId, data, this.moveToListIdScreen));
    }

    moveToListIdScreen() {
        this.props.history.push(`/dashboard/lists/id/${this.props.listId}`);
    }

    render() {

        let loading;
        if (this.props.loading) {
            loading = <h3>Adding...</h3>;
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }

        return(
            <section>
                <h1> Contact - Create </h1>
                <ContactCreateForm createContact={this.createContact}/>
                {loading}
                {error}
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        userId: Reducers.loginReducer.userId,
        loading: Reducers.userReducer.loading,
        message: Reducers.userReducer.message,
        listId: Reducers.userReducer.currentList
    };
};

export default loginGate()(connect(mapStateToProps)(ContactCreate));
