import React from 'react';

import './Viewbox.css';

function Viewbox(props) {
    
    return(
        <div className={'box'}>
            <div className={'box-title'}>{props.title}</div>
            <div className={'box-data'}>{props.data}</div>
        </div>
    );
};

export default Viewbox;
