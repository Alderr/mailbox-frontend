const axios = require('axios');

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000
});

const getUser = (dispatch, user, pass, fail) => {

    return instance({
        method: 'post',
        url: 'login/signIn',
        data: {
            username: user.username,
            password: user.password
        }
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE----');

            if (response.data === 'Wrong credentials!') {
                console.log('Wrong!');
                return dispatch(fail());
            }

            return dispatch(pass());
        })
        .catch(err => {
            console.log(err);
            return dispatch(fail());
        });
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
