import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignItem from '../campaign/CampaignItem';

import loginGate from '../requires-login-gate';

import { getDashboard, getCampaigns } from '../../actions/userActions';
import Viewbox from './components/Viewbox/Viewbox';

import './Dashboard.css';

export class Dashboard extends Component {

    componentWillMount() {
        this.props.dispatch(getDashboard(this.props.userId));
        this.props.dispatch(getCampaigns(this.props.userId));
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
                <Viewbox title={'Total Subscribers'} data={totalSubscribers} />
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
