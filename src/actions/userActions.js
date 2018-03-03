import * as Api from './apiCalls';

export const getDashboard = (userId) => dispatch => {
    dispatch(loading());
    Api.getDashboardData(dispatch, userId);

};

export const getList = (userId, listId) => dispatch => {
    dispatch(loading());
    Api.getListData(dispatch, userId, listId);

};

export const getLists = (userId) => dispatch => {
    dispatch(loading());
    Api.getListsData(dispatch, userId);

};

export const getCampaigns = (userId) => dispatch => {
    dispatch(loading());
    Api.getCampaignsData(dispatch, userId);

};

export const getCampaignEvent = (campaignEventId) => dispatch => {
    dispatch(loading());
    Api.getCampaignEventData(dispatch, campaignEventId);

};
//done
export const createList = (userId, data, moveToScreen) => dispatch => {
    dispatch(loading());
    Api.createListData(dispatch, userId, data, moveToScreen);

};

export const createCampaign = (userId, data, moveToScreen) => dispatch => {
    console.log('Campaign DATA', JSON.stringify(data, null, 2));
    console.log('USERID', userId);

    dispatch(loading());

    //  Api.createCampaignData(dispatch, userId, data);
    Api.createCampaignData(dispatch, userId, data, moveToScreen);


};

export const createContact = (userId, listId, data, moveToScreen) => dispatch => {
    dispatch(loading());
    console.log('i got this contact info? ', userId, listId, data);
    Api.createContactData(dispatch, userId, listId, data, moveToScreen);

};
//done
export const deleteList = (userId, listId) => dispatch => {
    dispatch(loading());
    Api.deleteListData(dispatch, userId, listId);

};

export const deleteCampaign = (userId, campaignId) => dispatch => {
    dispatch(loading());
    Api.deleteCampaignData(dispatch, userId, campaignId);

};
//done
export const deleteContact = (userId, listId, contactId) => dispatch => {
    dispatch(loading());
    console.log('got this deleteContact', userId, listId, contactId);
    Api.deleteContactData(dispatch, userId, listId, contactId);

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

export const GETLIST_DONE = 'GETLIST_DONE';

export const getListDone = (data) => ({
    type: GETLIST_DONE,
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

export const SET_CURRENT_LIST = 'SET_CURRENT_LIST';

export const setCurrentList = (data) => ({
    type: SET_CURRENT_LIST,
    data
});

export const SET_CURRENT_CAMPAIGN = 'SET_CURRENT_CAMPAIGN';

export const setCurrentCampaign = (data) => ({
    type: SET_CURRENT_CAMPAIGN,
    data
});
