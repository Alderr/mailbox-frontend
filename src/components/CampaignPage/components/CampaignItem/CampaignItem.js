import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { deleteCampaign } from '../../../../actions/userActions';

import './CampaignItem.css';

export function CampaignItem(props) {

    return(
        <Link to={`/dashboard/campaigns/id/${props.id}`} className={'campaign-item-container'}>
            {props.campaignName} - Sent on {moment(props.date).format('MMMM Do YYYY, h:mm:ss a')}

            {props.crud ? <button onClick={() => props.dispatch(deleteCampaign(props.userId, props.id))}>Delete</button> : null}
        </Link>
    );
}

const mapStateToProps = Reducers => {
    return {
        userId: Reducers.loginReducer.userId
    };
};

export default connect(mapStateToProps)(CampaignItem);
