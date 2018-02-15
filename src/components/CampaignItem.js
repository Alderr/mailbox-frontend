import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

export default class CampaignItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        console.log('--a list item---');
        return(
            <section>
                <li> {this.props.campaignName} - Sent on {this.props.date} </li>
            </section>
        );
    }
}
