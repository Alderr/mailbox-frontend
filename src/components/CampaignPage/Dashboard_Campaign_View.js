import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginGate from '../requires-login-gate';

import { getCampaignEvent } from '../../actions/userActions';

export class DashboardCampaignView extends Component {
    componentWillMount() {
        this.props.dispatch(getCampaignEvent(this.props.campaign.campaign_event_data_id));
        this.startPeriodicRefresh();
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    shouldComponentUpdate(nextProps){
        if (this.props.campaignEvent){
            // Allows campaign info to update in real-time! Checks if theres an update before re-rendering
            const checkOne = nextProps.campaignEvent.click.emails.length === this.props.campaignEvent.click.emails.length;
            const checkTwo = this.getClicks(nextProps.campaignEvent.click.emails) === this.getClicks(this.props.campaignEvent.click.emails);
            const checkThree = nextProps.campaignEvent.delivery.emails.length === this.props.campaignEvent.delivery.emails.length;

            return !(checkOne && checkTwo && checkThree);
        }

        return true;
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => {
                return this.props.dispatch(getCampaignEvent(this.props.campaign.campaign_event_data_id));
            },
            5 * 1000 // 20 seconds
        );
    }

    stopPeriodicRefresh() {
        clearInterval(this.refreshInterval);
    }

    getClicks(arr) {
        let clicks = 0;
        arr.forEach(email => {
            clicks = clicks + email.clickEvents.length;
        });

        return clicks;
    }

    render() {

        let loading;
        if (this.props.loading) {
            loading = <h3>Loading...</h3>;
        }

        let campaign_view;
        if (!this.props.loading && this.props.campaignEvent && !this.props.message) {
            campaign_view =
                <div>
                    <h1> Campaign: {this.props.campaign.name} </h1>
                    <div>
                        <div className='box'>
                            <h2>Subscribers: {this.props.campaignEvent.contacts.length} </h2>
                        </div>
                        <div className='box'>
                            <h2>Delivery: {this.props.campaignEvent.delivery.emails.length} </h2>
                        </div>
                        <div className='box'>
                            <h2>Open: {this.props.campaignEvent.open.emails.length} </h2>
                        </div>
                        <div className='box'>
                            <h2>Click: {this.getClicks(this.props.campaignEvent.click.emails)}</h2>
                        </div>
                    </div>
                </div>;
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }

        return(
            <section>
                {loading}
                {error}
                {campaign_view}
            </section>
        );
    }
}

const mapStateToProps = (Reducers, props) => {
    return {
        userId: Reducers.loginReducer.userId,
        loading: Reducers.userReducer.loading,
        campaign: Reducers.userReducer.campaignsData.find(campaign => campaign._id === props.match.params.id),
        campaignEvent: Reducers.userReducer.campaignEventData
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardCampaignView));
