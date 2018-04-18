import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginGate from './requires-login-gate';

import { Link } from 'react-router-dom';

import { deleteList, setCurrentList } from '../actions/userActions';

export class ListItem extends Component {
    constructor(props){
        super(props);
    }

    deleteList = () => {
        this.props.dispatch(deleteList(this.props.userId, this.props.id));
    }

    setCurrentList = () => {
      this.props.dispatch(setCurrentList(this.props.id));
    }

    render() {
        return(
            <section key={this.props.id}>

                <li key={this.props.id}>
                    <Link onClick={this.setCurrentList} to={`/dashboard/lists/id/${this.props.id}`}>
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
