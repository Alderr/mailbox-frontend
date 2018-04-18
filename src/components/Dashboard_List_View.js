import React from 'react';
import { connect } from 'react-redux';

import loginGate from './requires-login-gate';

import { deleteContact } from '../actions/userActions';

export function DashboardListView(props) {

    function createContacts() {
        return props.list.contacts.map(contact => {
            return (
                <li key={contact._id}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    <p>{contact.email}</p>
                    <p>{contact.date}</p>
                    <button onClick={() => props.dispatch(deleteContact(props.userId, props.list._id, contact._id))}> Delete </button>
                </li>);
        });
    }

    function moveToCreateContactView() {
        props.history.push(`/dashboard/lists/id/${props.list._id}/createContact`);
    }

    return(
        <section>
            <h1> List: {props.list.name} </h1>
            <div>
                <button onClick={moveToCreateContactView}> Add Contact </button>
            </div>
            <ul>
                {createContacts()}
            </ul>
        </section>
    );
}

const mapStateToProps = (Reducers, props) => {
    return {
        userId: Reducers.loginReducer.userId,
        list: Reducers.userReducer.listsData.find(list => list._id === props.match.params.id)
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardListView));
