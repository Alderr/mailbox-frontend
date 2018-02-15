import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
    function RequiresLogin(props) {
        const {...passThroughProps} = props;
        console.log('in here!-------------');
        if (props.loggedIn) {
            return <Component {...passThroughProps} />;
        }

        return <Redirect to="/loginPage" />;
    }

    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;

    const mapStateToProps = (Reducers) => ({
        loggedIn: Reducers.loginReducer.loggedIn
    });

    return connect(mapStateToProps)(RequiresLogin);
};
