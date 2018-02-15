import { getUserDone, getUserFail } from './userActions';

export const axios = require('axios');

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000
});

export const findUser = (dispatch, user, pass, fail) => {

    return instance({
        method: 'post',
        url: 'login/signIn',
        data: {
            username: user.username,
            password: user.password
        }
    })
        .then(response => {
            let userId = response.data;

            console.log(response);
            console.log('----RESPONSE----');

            if (response.data === 'Wrong credentials!') {
                console.log('Wrong!');
                return dispatch(fail());
            }

            return dispatch(pass(userId));
        })
        .catch(err => {
            console.log(err);
            return dispatch(fail());
        });
};

export const getUserInfo = (dispatch, userId) => {

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

export const getLists = (dispatch, userId) => {

};

export const getList = (dispatch, userId, listId) => {

};

export const getCampaigns = (dispatch, userId) => {

};

export const getCampaign = (dispatch, userId, campaignId) => {

};

export const getEventCampaign = (dispatch, userId, eventCampaignId) => {

};
