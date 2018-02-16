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
        console.log('THIS.PROPS', this.props);

        return(
            <section>
                <h1> Campaign: {this.props.campaign.name} </h1>
                <div>
                    <div className='box'>
                        <h2>Subscribers</h2>
                    </div>
                    <div className='box'>
                        <h2>Delivery</h2>
                    </div>
                    <div className='box'>
                        <h2>Open</h2>
                    </div>
                    <div className='box'>
                        <h2>Click</h2>
                    </div>
                </div>
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
