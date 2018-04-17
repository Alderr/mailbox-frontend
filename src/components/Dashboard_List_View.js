import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginGate from './requires-login-gate';

import { getCampaigns, deleteContact } from '../actions/userActions';

export class DashboardListView extends Component {

    createContacts() {
        return this.props.list.contacts.map(contact => {
            return (
                <li key={contact._id}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    <p>{contact.email}</p>
                    <p>{contact.date}</p>
                    <button onClick={() => this.deleteContact(contact._id)}> Delete </button>
                </li>);
        });
    }

    deleteContact (id) {
        console.log('this contact....', id);
        this.props.dispatch(deleteContact(this.props.userId, this.props.list._id, id));
    }

    moveToCreateContactView() {
        this.props.history.push(`/dashboard/lists/id/${this.props.list._id}/createContact`);
    }

    render() {
        console.log('THIS.PROPS', this.props);

        return(
            <section>
                <h1> List: {this.props.list.name} </h1>
                <div>
                    <button onClick={() => this.moveToCreateContactView()}>
                          Add Contact
                    </button>
                </div>
                <ul>
                    {this.createContacts()}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (Reducers, props) => {
    return {
        userId: Reducers.loginReducer.userId,
        list: Reducers.userReducer.listsData.find(list => list._id === props.match.params.id)
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardListView));
