import {

    getDashboardDone,
    getDashboardFail,
    getLists,
    getListsDone,
    getCampaignsDone,
    getCampaignEventDone,
    fetchFail

} from './userActions';

export const axios = require('axios');

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
//done
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
//done
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
            return dispatch(getDashboardFail(err.message));
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
//done
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
            return dispatch(fetchFail(err.message));
        });
};

export const getCampaign = (dispatch, userId, campaignId) => {

};
//done
export const getCampaignEventData = (dispatch, campaignEventId) => {
    return instance({
        method: 'get',
        url: `eventData/${campaignEventId}`,
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_CAMPAIGN_EVENT_DATA----');

            return dispatch(getCampaignEventDone(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(fetchFail(err.message));
        });
};

export const createListData = (dispatch, userId, data, moveToScreen) => {
    const { name } = data;
    console.log('I was given ', name);
    return instance({
        method: 'post',
        url: `list/${userId}/create`,
        data: {
            name
        }
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_CREATE_LIST----');

            return moveToScreen();
        })
        .catch(err => {
            console.log('err', err);
            return dispatch(fetchFail(err.message));
        });
};

export const deleteListData = (dispatch, userId, listId) => {

    console.log('I was given ', userId, listId);
    return instance({
        method: 'delete',
        url: `list/${userId}/delete/${listId}`
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_DELETE_LIST----');

            dispatch(getLists(userId));
        })
        .catch(err => {
            console.log('err', err);
            return dispatch(fetchFail(err.message));
        });
};
