import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from './requires-login-gate';

import { getCampaigns } from '../actions/userActions';

export class DashboardListView extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            contacts: ''

        };
    }

    createContacts() {
        return this.props.list.contacts.map(contact => {
            return (
                <li key={contact._id}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    <p>{contact.email}</p>
                    <p>{contact.date}</p>
                    <button onClick={null}> Delete </button>
                </li>);
        });
    }
    componentWillMount() {
        //this.props.dispatch(getCampaigns(this.props.userId));
    }

    render() {
        console.log('THIS.PROPS', this.props);

        return(
            <section>
                <h1> List: {this.props.list.name} </h1>
                <div>
                    <button>

                        <Link to={`/dashboard/lists/id/${this.props.id}/createContact`}>
                          Add Contact
                        </Link>
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
        list: Reducers.userReducer.listsData.filter(list => list._id === props.id)[0]
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardListView));
