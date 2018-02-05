
const initialStore = {
    loggedIn: false,
    user: '',
    message: ''
};

export default(state = initialStore, action) => {

    if (action.type === 'LOGIN') {
        return Object.assign({}, state, {
            message: 'Logging in...'
        });
    }

    else if (action.type === 'LOGOUT') {
        return Object.assign({},state, {
            loggedIn: false,
            user: ''
        });
    }

    else if (action.type === 'LOGIN_SUCCESS') {
        return Object.assign({},state, {
            loggedIn: true,
            user: 'Vernon'
        });
    }

    else if (action.type === 'LOGIN_FAILURE') {
        return Object.assign({},state, {
            message: 'Incorrect credentials.'
        });
    }

    return state;
};
