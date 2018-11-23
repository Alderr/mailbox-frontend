import React from 'react';
import loginGate from '../requires-login-gate';

export function CampaignEndScreen(props) {

    return(
        <div>
            <h1> One Click & Send The Campaign </h1>
            <button onClick={() => props.sendCampaignData()}> Send ^^ </button>
        </div>
    );
}

export default loginGate()(CampaignEndScreen);
