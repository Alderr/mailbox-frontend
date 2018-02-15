const axios = require('axios');

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000
});

const { getUser, getUserDone, getUserFail } = './userActions';

const findUser = (dispatch, user, pass, fail) => {

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
            //dispatch(getUser());
            return dispatch(pass(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(fail());
        });
};

const getUserInfo = (dispatch, userId) => {

    return instance({
        method: 'get',
        url: `user/${userId}`,
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE----');

            return dispatch(getUserDone(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(getUserFail(err));
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

    findUser,
    getUserInfo,
    getLists,
    getList,
    getCampaigns,
    getCampaign,
    getEventCampaign

};
