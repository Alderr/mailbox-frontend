import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteCampaign } from '../actions/userActions';

export function CampaignItem(props) {

    return(
        <section>
            <li>
                <Link to={`/dashboard/campaigns/id/${props.id}`}>
                    {props.campaignName} - Sent on {props.date}
                </Link>
                {props.crud ? <button onClick={() => props.dispatch(deleteCampaign(props.userId, props.id))}>Delete</button> : null}
            </li>
        </section>
    );
}


const mapStateToProps = Reducers => {
    return {
        userId: Reducers.loginReducer.userId
    };
};

export default connect(mapStateToProps)(CampaignItem);
