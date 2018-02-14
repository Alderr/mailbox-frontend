
const getUser = (dispatch, user, pass, fail) => {
    console.log('getUser!', user);
    return dispatch(pass());
};

const getLists = (dispatch, userId) => {

};

const getList = (dispatch, userId, listId) => {

};

const getCampaigns = (dispatch, userId) => {

};

const getCampaign = (dispatch, userId, campaignId) => {

};

const getEventCampaign = (dispatch, userId, eventCampaignId) => {

};

module.exports = {

    getUser,
    getLists,
    getList,
    getCampaigns,
    getCampaign,
    getEventCampaign

};
