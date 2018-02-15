const initialStore = {
    userId: '',
    loading: false,
    message: '',
    lists: '',
    campaigns: ''
};

export default(state = initialStore, action) => {
    console.log(state);
    console.log('-------USER_STATE----------');

    if (action.type === 'LOADING') {

        return Object.assign({}, state, {
            loading: true,
        });
    }

    if (action.type === 'GETUSER_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
        });
    }

    if (action.type === 'GETUSER_FAIL') {
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            message: state.error
        });
    }

    return state;
};
