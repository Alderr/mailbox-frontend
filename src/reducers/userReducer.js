const initialStore = {
    loading: false,
    message: '',
    dashboardData: '',
    listsData: '',
    listData: '',
    currentList: '',
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
        return Object.assign({}, state, {
            message: '',
            loading: false,
            dashboardData: action.data
        });
    }

    if (action.type === 'GETLISTS_DONE') {
        return Object.assign({}, state, {
            message: '',
            loading: false,
            listsData: action.data
        });
    }

    if (action.type === 'GETLIST_DONE') {
        return Object.assign({}, state, {
            message: '',
            loading: false,
            listsData: state.listsData.map(list => {
                if (action.data.id === list.id) {
                    return action.data;
                }

                return list;
            })
        });
    }

    if (action.type === 'GETCAMPAIGNS_DONE') {
        return Object.assign({}, state, {
            message: '',
            loading: false,
            campaignsData: action.data
        });
    }

    if (action.type === 'GETCAMPAIGNEVENT_DONE') {
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
        
        return Object.assign({}, state, {
            loading: false,
            message: action.error
        });
    }

    if (action.type === 'SET_CURRENT_LIST') {
        
        return Object.assign({}, state, {
            currentList: action.data,
        });
    }

    if (action.type === 'SET_CURRENT_CAMPAIGN') {
        
        return Object.assign({}, state, {
            currentCampaign: action.data,
        });
    }


    return state;
};
