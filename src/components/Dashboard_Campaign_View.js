import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import loginGate from './requires-login-gate';

import { getCampaignEvent } from '../actions/userActions';

export class DashboardCampaignView extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            contacts: ''

        };
    }

    componentWillMount() {
        this.props.dispatch(getCampaignEvent(this.props.campaign.campaign_event_data_id));
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
                            <h2>Click: {this.props.campaignEvent.click.emails.length}</h2>
                        </div>
                    </div>
                </div>;
        }

        let error;
        if (this.props.message) {
            error = <h3>{this.props.message}</h3>;
        }

        console.log('THIS.PROPS', this.props);

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
        campaign: Reducers.userReducer.campaignsData.filter(campaign => campaign._id === props.id)[0],
        campaignEvent: Reducers.userReducer.campaignEventData
    };
};

export default loginGate()(connect(mapStateToProps)(DashboardCampaignView));
