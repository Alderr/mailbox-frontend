import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

export default class ListItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props);
        console.log('--a list item---');
        return(
            <section key={this.props.id}>
                <Link to={`/dashboard/lists/${this.props.id}`}>
                    <li key={this.props.id}> {this.props.listName} - {this.props.subscribers} subscribers </li>
                </Link>
            </section>
        );
    }
}
