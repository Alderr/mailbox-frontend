import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginGate from './requires-login-gate';
import ListCreateForm from './ListCreateForm';

import { createList } from '../actions/userActions';

export class DashboardListCreate extends Component {
    constructor(props){
        super(props);

        this.createNewList = this.createNewList.bind(this);
        this.moveToListScreen = this.moveToListScreen.bind(this);
    }

    createNewList(data) {
        this.props.dispatch(createList(this.props.userId, data, this.moveToListScreen));
    }

    moveToListScreen() {
        this.props.history.push('/dashboard/lists');
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
                <h1> List - Create </h1>
                <ListCreateForm createNewList={this.createNewList} />
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
        message: Reducers.userReducer.message
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardListCreate));
