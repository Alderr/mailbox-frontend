import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from './requires-login-gate';

import { getCampaigns } from '../actions/userActions';

export class Reports extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        //this.props.dispatch(getCampaigns(this.props.userId));
    }

    render() {

        let loading;
        if (this.props.loading) {
            loading = <h3>Loading...</h3>;
        }

        let campaigns;
        if (!this.props.loading && this.props.campaigns && !this.props.message) {
            campaigns = <h1> lol </h1>;

        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }


        return(
            <section>
                <h1> Reports </h1>
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
        campaigns: Reducers.userReducer.campaignsData
    };
};

export default loginGate()(connect(mapStateToProps)(Reports));
