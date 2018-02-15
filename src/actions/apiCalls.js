import {

    getDashboardDone,
    getDashboardFail,
    getListsDone,
    getCampaignsDone,
    fetchFail

} from './userActions';

export const axios = require('axios');

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
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
                return dispatch(fail('Wrong credentials!'));
            }

            return dispatch(pass(userId));
        })
        .catch(err => {
            console.log(err.message);
            return dispatch(fail(err.message));
        });
};

export const getDashboardData = (dispatch, userId) => {

    return instance({
        method: 'get',
        url: 'user/summary',
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE----');

            return dispatch(getDashboardDone(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(getDashboardFail(err));
        });
};

export const getListsData = (dispatch, userId) => {
    return instance({
        method: 'get',
        url: `list/${userId}`,
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_LISTS----');

            return dispatch(getListsDone(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(fetchFail(err.message));
        });
};

export const getList = (dispatch, userId, listId) => {

};

export const getCampaignsData = (dispatch, userId) => {

    return instance({
        method: 'get',
        url: `campaign/${userId}`,
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_LISTS----');

            return dispatch(getCampaignsDone(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(fetchFail(err));
        });
};

export const getCampaign = (dispatch, userId, campaignId) => {

};

export const getEventCampaign = (dispatch, userId, eventCampaignId) => {

};
