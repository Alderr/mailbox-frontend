import React, { Component } from 'react';
import { connect } from 'react-redux';
import CampaignItem from '../CampaignPage/components/CampaignItem/CampaignItem';

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
        const { recentCampaigns = [], totalSubscribers = 0 } = this.props.summary;
        let recentCampaignsList;

        if (recentCampaigns) {
            recentCampaignsList = this.createCampaignItems(recentCampaigns);
        }

        return(
            <section>
                <section className={'viewbox-container'}>
                    <Viewbox title={'Total Subscribers'} data={totalSubscribers} />
                    <Viewbox title={'Total Campaigns'} data={totalSubscribers} />
                    <Viewbox title={'Emails Sent'} data={totalSubscribers} />
                    <Viewbox title={'Open Rate'} data={totalSubscribers} />
                </section>
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
