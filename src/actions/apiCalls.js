import {

    getDashboardDone,
    getDashboardFail,
    getList,
    getLists,
    getListDone,
    getListsDone,
    getCampaigns,
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

export const getListData = (dispatch, userId, listId) => {
    return instance({
        method: 'get',
        url: `list/${userId}/${listId}`,
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_ONE_LIST----');

            return dispatch(getListDone(response.data));
        })
        .catch(err => {
            console.log(err);
            return dispatch(fetchFail(err.message));
        });
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

export const createCampaignData = (dispatch, userId, data, moveToScreen) => {
    // const { name, email_content, lists } = data;
    //const { body, subject, data } = email_content;
    //console.log('I was given SENDER, EMAIL_CONTENT, LISTS, NAME\n', JSON.stringify(email_content, lists, name, null, 2));

    // return instance({
    //     method: 'post',
    //     url: `list/${userId}/create`,
    //     data: {
    //         name
    //     }
    // })
    //     .then(response => {
    //         console.log(response);
    //         console.log('----RESPONSE_CREATE_LIST----');
    //
    //         return moveToScreen();
    //     })
    //     .catch(err => {
    //         console.log('err', err);
    //         return dispatch(fetchFail(err.message));
    //     });
};

export const createContactData = (dispatch, userId, listId, data, moveToScreen) => {
    const { firstName, lastName, email } = data;
    console.log('I was given ', firstName, lastName, email);

    return instance({
        method: 'put',
        url: `list/${userId}/update/${listId}/createContact`,
        data: {
            firstName,
            lastName,
            email
        }
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_CREATE_LIST----');

            /*
            getList allows the new items or delete items
            to render.
            - calls api for the changed list
            - new data is fed to specific listsData
            */

            dispatch(getList(userId, listId));
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

export const deleteCampaignData = (dispatch, userId, campaignId) => {

    console.log('I was given ', userId, campaignId);
    return instance({
        method: 'delete',
        url: `campaign/${userId}/delete/${campaignId}`
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_DELETE_CAMPAIGN----');

            dispatch(getCampaigns(userId));
        })
        .catch(err => {
            console.log('err', err);
            return dispatch(fetchFail(err.message));
        });
};

export const deleteContactData = (dispatch, userId, listId, contactId) => {

    console.log('I was given ', userId, listId, contactId);
    return instance({
        method: 'put',
        url: `list/${userId}/update/${listId}/deleteContact`,
        data: {
            contactId
        }
    })
        .then(response => {
            console.log(response);
            console.log('----RESPONSE_DELETE_LIST----');

            dispatch(getLists(userId));
        })
        .catch(err => {
            console.log('err', err);
            dispatch(fetchFail(err.message));
        });
};
