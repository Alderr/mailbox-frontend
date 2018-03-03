import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

export class CampaignEndScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            subject: '',
            listsSelected: [],
        };

    }

    saveDataAndMoveToCampaignScreen() {
        this.props.sendCampaignData();
        this.props.history.push('/dashboard/campaigns');
    }

    render() {
        console.log('PROPS!', this.props);

        return(
            <div>
                <h1> One Click & Send The Campaign </h1>
                <button onClick={() => this.props.sendCampaignData()}> Send ^^ </button>
            </div>
        );


    }
}

const mapStateToProps = Reducers => {
    return {
        lists: Reducers.userReducer.listsData
    };
};

export default loginGate()(connect(mapStateToProps)(CampaignEndScreen));
