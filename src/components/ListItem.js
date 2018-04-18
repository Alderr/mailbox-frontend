import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { deleteList, setCurrentList } from '../actions/userActions';

export function ListItem(props) {

    return(
        <section key={props.id}>

            <li key={props.id}>
                <Link onClick={() => props.dispatch(setCurrentList(props.id))} to={`/dashboard/lists/id/${props.id}`}>
                    <p>{props.listName} - {props.subscribers} subscribers</p>
                </Link>
                <button onClick={() => props.dispatch(deleteList(props.userId, props.id))}> Delete </button>
            </li>


        </section>
    );
}


const mapStateToProps = Reducers => {
    return {
        userId: Reducers.loginReducer.userId
    };
};

export default connect(mapStateToProps)(ListItem);
