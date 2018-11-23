import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from '../requires-login-gate';
import CampaignItem from './components/CampaignItem/CampaignItem';

import { getCampaigns } from '../../actions/userActions';

import './CampaignPage.css';

export class DashboardCampaigns extends Component {

    componentWillMount() {
        this.props.dispatch(getCampaigns(this.props.userId));
    }

    createCampaignItem(campaign) {
        const { name, _id, date } = campaign;

        return <CampaignItem key={_id} campaignName={name} id={_id} date={date} crud={true}/>;
    }

    render() {

        let loading;
        if (this.props.loading) {
            loading = <h3>Loading...</h3>;
        }

        let campaigns;
        if (!this.props.loading && this.props.campaigns && !this.props.message) {
            campaigns = this.props.campaigns.map(campaign => this.createCampaignItem(campaign));
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }


        return(
            <section className={'campaign-page-container'}>
                <h1> Campaigns </h1>
                <Link to='/dashboard/campaigns/create'> Create </Link>
                {loading}
                {error}
                {campaigns}
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

export default loginGate()(connect(mapStateToProps)(DashboardCampaigns));
