import {

    getDashboardData,
    getListsData,
    getCampaignsData,
    getCampaignEventData,
    createListData

} from './apiCalls';

export const getDashboard = (userId) => dispatch => {
    dispatch(loading());
    return getDashboardData(dispatch, userId);

};

export const getLists = (userId) => dispatch => {
    dispatch(loading());
    return getListsData(dispatch, userId);

};

export const getCampaigns = (userId) => dispatch => {
    dispatch(loading());
    return getCampaignsData(dispatch, userId);

};

export const getCampaignEvent = (campaignEventId) => dispatch => {
    dispatch(loading());
    return getCampaignEventData(dispatch, campaignEventId);

};

export const createList = (userId, data, moveToScreen) => dispatch => {
    dispatch(loading());
    return createListData(dispatch, userId, data, moveToScreen);

};

export const LOADING = 'LOADING';

export const loading = () => ({
    type: LOADING
});

export const GETDASHBOARD_DONE = 'GETDASHBOARD_DONE';

export const getDashboardDone = (data) => ({
    type: GETDASHBOARD_DONE,
    data
});

export const GETLISTS_DONE = 'GETLISTS_DONE';

export const getListsDone = (data) => ({
    type: GETLISTS_DONE,
    data
});

export const GETCAMPAIGNS_DONE = 'GETCAMPAIGNS_DONE';

export const getCampaignsDone = (data) => ({
    type: GETCAMPAIGNS_DONE,
    data
});

export const GETCAMPAIGNEVENT_DONE = 'GETCAMPAIGNEVENT_DONE';

export const getCampaignEventDone = (data) => ({
    type: GETCAMPAIGNEVENT_DONE,
    data
});

export const GETDASHBOARD_FAIL = 'GETDASHBOARD_FAIL';

export const getDashboardFail = (error) => ({
    type: GETDASHBOARD_FAIL,
    error
});

export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchFail = (error) => ({
    type: FETCH_FAIL,
    error
});
