import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import { Link } from 'react-router-dom';

export class LoginPage extends Component {
    constructor(props){
        super(props);
    }

    onSubmit() {
      
    }

    render() {
        return(
            <div>
                <h1>
                LoginPage
                </h1>

                <form>
                    <label>
                    Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                    Password:
                        <input type="text" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <button><Link to='/dashboard'>Go To Dashboard</Link></button>
            </div>
        );
    }
}
const mapStateToProps = Reducers => {
    return {
        actions: Reducers.reducer.actions,
        navigate: Reducers.reducer.navigate,
        mainBranch: Reducers.navigateReducer.mainBranch
    };
};

export default connect(mapStateToProps)(LoginPage);
