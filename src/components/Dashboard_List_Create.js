import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class DashboardListCreate extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <section>
                <h1> List - Create </h1>
                <Link to='/dashboard/lists'> Save </Link>
            </section>
        );
    }
}
