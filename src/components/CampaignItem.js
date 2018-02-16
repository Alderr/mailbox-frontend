import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

import { deleteCampaign, setCurrentList } from '../actions/userActions';

export class CampaignItem extends Component {
    constructor(props){
        super(props);
    }

    deleteCampaign = () => {
        this.props.dispatch(deleteCampaign(this.props.userId, this.props.id));
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        console.log('--a list item---');
        return(
            <section>
                <li>
                    <Link to={`/dashboard/campaigns/id/${this.props.id}`}>
                        {this.props.campaignName} - Sent on {this.props.date}
                    </Link>
                    <button onClick={this.deleteCampaign}>Delete</button>
                </li>
            </section>
        );
    }
}

const mapStateToProps = Reducers => {
    return {
        userId: Reducers.loginReducer.userId
    };
};

export default connect(mapStateToProps)(CampaignItem);
