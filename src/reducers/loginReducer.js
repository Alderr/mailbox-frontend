import * as LoginActions from '../actions/loginActions';

const initialStore = {
    loggedIn: false,
    loading: false,
    userId: '',
    message: ''
};

export default(state = initialStore, action) => {

    if (action.type === LoginActions.LOGIN) {
        return Object.assign({}, state, {
            loading: true,
            message: 'Logging in...'
        });
    }

    if (action.type === LoginActions.REGISTER) {
        return Object.assign({}, state, {
            loading: true,
            message: 'Creating your account...'
        });
    }

    else if (action.type === 'LOGOUT') {
        return Object.assign({},state, {
            loggedIn: false,
            user: ''
        });
    }

    else if (action.type === 'LOGIN_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            loggedIn: true,
            userId: action.userId,
            message: '',
        });
    }

    else if (action.type === 'LOGIN_FAILURE') {
        return Object.assign({}, state, {
            loading: false,
            message: action.message
        });
    }

    return state;
};
