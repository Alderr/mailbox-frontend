const initialStore = {
    loading: false,
    message: '',
    dashboardData: '',
    listsData: '',
    campaignsData: '',
    eventData: ''
};

export default(state = initialStore, action) => {

    if (action.type === 'LOADING') {

        return Object.assign({}, state, {
            loading: true,
        });
    }

    if (action.type === 'GETDASHBOARD_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            dashboardData: state.data
        });
    }

    if (action.type === 'GETLISTS_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            lists: state.data
        });
    }

    if (action.type === 'GETDASHBOARD_FAIL') {
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            message: state.error
        });
    }

    if (action.type === 'FETCH_FAIL') {
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            message: state.error
        });
    }


    return state;
};
