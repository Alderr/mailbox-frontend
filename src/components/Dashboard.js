import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignItem from './CampaignItem';

import loginGate from './requires-login-gate';

import { getDashboard } from '../actions/userActions';


export class Dashboard extends Component {

    componentWillMount() {
        this.props.dispatch(getDashboard(this.props.userId));
    }

    createCampaignItems(arr) {
        return arr.map(campaign => {
            const { name, _id, date } = campaign;

            return <CampaignItem key={_id} campaignName={name} id={_id} date={date} crud={false} />;
        });
    }

    render() {      
        const { recentCampaigns, totalSubscribers } = this.props.summary;
        let recentCampaignsList;

        if (recentCampaigns) {
            recentCampaignsList = this.createCampaignItems(recentCampaigns);
        }

        return(
            <section>
                <h1> Dashboard.js </h1>
                <h1> Total Subscribers: {totalSubscribers} </h1>
                <h1> Recent Campaigns </h1>
                <ul>{recentCampaignsList}</ul>
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        loggedIn: Reducers.loginReducer.loggedIn,
        message: Reducers.loginReducer.message,
        userId: Reducers.loginReducer.userId,
        summary: Reducers.userReducer.dashboardData
    };
};

export default loginGate()(connect(mapStateToProps)(Dashboard));
