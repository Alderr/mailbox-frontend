import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from './requires-login-gate';
import ListItem from './ListItem.js';

import { getLists } from '../actions/userActions';

export class DashboardLists extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getLists(this.props.userId));
    }

    createListItem(list) {
        const { name, contacts, _id } = list;
        console.log('NAME, CONTACTS, _ID ', JSON.stringify(name, contacts, _id , null, 2));

        return <ListItem key={_id} listName={name} subscribers={contacts.length} id={_id} />

    }

    render() {
        let loading;
        if (this.props.loading) {
            loading = <h3>Loading...</h3>;
        }

        let lists;
        if (!this.props.loading && this.props.lists && !this.props.message) {
            lists = this.props.lists.map(list => this.createListItem(list));
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }

        return(
            <section>
                <h1> Lists </h1>
                <Link to='/dashboard/lists/create'> Create </Link>
                {loading}
                {error}
                {lists}
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        userId: Reducers.loginReducer.userId,
        loading: Reducers.userReducer.loading,
        message: Reducers.userReducer.message,
        lists: Reducers.userReducer.listsData
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardLists));
