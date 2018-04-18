import React from 'react';
import { connect } from 'react-redux';

import loginGate from './requires-login-gate';
import ContactCreateForm from './ContactCreateForm';

import { getCampaigns, createContact } from '../actions/userActions';

export function ContactCreate(props) {

    function createContact(data) {
        props.dispatch(createContact(props.userId, props.listId, data, moveToListIdScreen));
    }

    function moveToListIdScreen() {
        props.history.push(`/dashboard/lists/id/${props.listId}`);
    }

    let loading;
    if (props.loading) {
        loading = <h3>Adding...</h3>;
    }

    let error;
    if (props.message) {
        error = <h3>{props.message}</h3>;
    }

    return(
        <section>
            <h1> Contact - Create </h1>
            <ContactCreateForm createContact={createContact}/>
            {loading}
            {error}
        </section>
    );
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
