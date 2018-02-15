
const initialStore = {
    loggedIn: false,
    loading: false,
    userId: '',
    message: ''
};

export default(state = initialStore, action) => {
    console.log(state);
    console.log('----LOGIN STATE----------');
    if (action.type === 'LOGIN') {
        return Object.assign({}, state, {
            loading: true,
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
        return Object.assign({}, state, {
            loading: false,
            loggedIn: true,
            userId: action.userId
        });
    }

    else if (action.type === 'LOGIN_FAILURE') {
        return Object.assign({}, state, {
            loading: false,
            message: 'Incorrect credentials.'
        });
    }

    return state;
};
