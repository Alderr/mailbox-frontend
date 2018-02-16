const initialStore = {
    loading: false,
    message: '',
    dashboardData: '',
    listsData: '',
    listData: '',
    campaignsData: '',
    campaignData: '',
    campaignEventData: ''
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
            message: '',
            loading: false,
            dashboardData: state.data
        });
    }

    if (action.type === 'GETLISTS_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            message: '',
            loading: false,
            listsData: action.data
        });
    }

    if (action.type === 'GETCAMPAIGNS_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            message: '',
            loading: false,
            campaignsData: action.data
        });
    }

    if (action.type === 'GETCAMPAIGNEVENT_DONE') {
        console.log(action.data);
        return Object.assign({}, state, {
            message: '',
            loading: false,
            campaignEventData: action.data
        });
    }
    if (action.type === 'GETDASHBOARD_FAIL') {

        return Object.assign({}, state, {
            loading: false,
            message: action.error
        });
    }

    if (action.type === 'FETCH_FAIL') {
        console.log(action);
        console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            message: action.error
        });
    }


    return state;
};
