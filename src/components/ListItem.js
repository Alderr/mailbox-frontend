import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

import { deleteList } from '../actions/userActions';

export class ListItem extends Component {
    constructor(props){
        super(props);
    }

    deleteList = () => {
        this.props.dispatch(deleteList(this.props.userId, this.props.id));
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        console.log('--a list item---');
        return(
            <section key={this.props.id}>

                <li key={this.props.id}>
                    <Link to={`/dashboard/lists/id/${this.props.id}`}>
                        <p>{this.props.listName} - {this.props.subscribers} subscribers</p>
                    </Link>
                    <button onClick={this.deleteList}> Delete </button>
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

export default connect(mapStateToProps)(ListItem);
