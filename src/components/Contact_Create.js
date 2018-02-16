import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginGate from './requires-login-gate';
import ContactCreateForm from './ContactCreateForm';

import { Link } from 'react-router-dom';

import { getCampaigns, createContact } from '../actions/userActions';

export class ContactCreate extends Component {
    constructor(props){
        super(props);
    }

    createContact = (data) => {
        this.props.dispatch(createContact(this.props.userId, this.props.listId, data, this.moveToListIdScreen));
    }

    moveToListIdScreen = () => {
      console.log('contact id...', this.props.listId);
      this.props.history.push(`/dashboard/lists/id/${this.props.listId}`);
    }

    render() {
        console.log('in contact create!');
        console.log('PROPS', this.props);

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
