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

            if (response.data === 'Wrong credentials!') {
                
                return dispatch(fail('Wrong credentials!'));
            }

            return dispatch(pass(userId));
        })
        .catch(err => {
            return dispatch(fail(err.message));
        });
};

export const registerUser = (dispatch, user, pass, fail) => {

    return instance({
        method: 'post',
        url: 'user/create',
        data: {
            username: '',
            password: '',
            name: {
                firstName: '',
                lastName: ''
            }
        }
    })
        .then(response => {
            console.log('registering response: ', response);
            let userId = response.data;

            if (response.data === 'Wrong credentials!') {
                
                return dispatch(fail('Wrong credentials!'));
            }

            return dispatch(pass(userId));
        })
        .catch(err => {
            return dispatch(fail(err.message));
        });
};

export const getDashboardData = (dispatch, userId) => {
    
    return instance({
        method: 'get',
        url: `user/${userId}/summary`,
    })
        .then(response => {
            dispatch(getDashboardDone(response.data));
        })
        .catch(err => {
            dispatch(getDashboardFail(err.message));
        });
};

export const getListsData = (dispatch, userId) => {
    return instance({
        method: 'get',
        url: `list/${userId}`,
    })
        .then(response => {
            return dispatch(getListsDone(response.data));
        })
        .catch(err => {
            
            return dispatch(fetchFail(err.message));
        });
};

export const getListData = (dispatch, userId, listId) => {
    return instance({
        method: 'get',
        url: `list/${userId}/${listId}`,
    })
        .then(response => {
            return dispatch(getListDone(response.data));
        })
        .catch(err => {
            return dispatch(fetchFail(err.message));
        });
};

export const getCampaignsData = (dispatch, userId) => {

    return instance({
        method: 'get',
        url: `campaign/${userId}`,
    })
        .then(response => {
            return dispatch(getCampaignsDone(response.data));
        })
        .catch(err => {
            
            return dispatch(fetchFail(err.message));
        });
};

export const getCampaignEventData = (dispatch, campaignEventId) => {
    return instance({
        method: 'get',
        url: `eventData/${campaignEventId}`,
    })
        .then(response => {
            return dispatch(getCampaignEventDone(response.data));
        })
        .catch(err => {
            
            return dispatch(fetchFail(err.message));
        });
};

export const createListData = (dispatch, userId, data, moveToScreen) => {
    const { name } = data;
    
    return instance({
        method: 'post',
        url: `list/${userId}/create`,
        data: {
            name
        }
    })
        .then(response => {
            return moveToScreen();
        })
        .catch(err => {
            return dispatch(fetchFail(err.message));
        });
};

export const createCampaignData = (dispatch, userId, data, moveToScreen) => {
    const { name, subject, body, sender, lists } = data;
    const email_content = {subject, body, sender};

    return instance({
        method: 'post',
        url: `campaign/${userId}/create`,
        data: {
            name,
            lists,
            email_content
        }
    })
        .then(response => {
            
            
            moveToScreen();
        })
        .catch(err => {
            
            return err;
        });
};

export const createContactData = (dispatch, userId, listId, data, moveToScreen) => {
    const { firstName, lastName, email } = data;
    
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

            /*
            getList allows the new items or deleted items
            to render.
            - calls api for the changed list
            - new data is fed to specific listsData
            */

            dispatch(getList(userId, listId));
            return moveToScreen();
        })
        .catch(err => {
            return dispatch(fetchFail(err.message));
        });
};

export const deleteListData = (dispatch, userId, listId) => {

    return instance({
        method: 'delete',
        url: `list/${userId}/delete/${listId}`
    })
        .then(response => {
            dispatch(getLists(userId));
        })
        .catch(err => {
            
            return dispatch(fetchFail(err.message));
        });
};

export const deleteCampaignData = (dispatch, userId, campaignId) => {
    
    return instance({
        method: 'delete',
        url: `campaign/${userId}/delete/${campaignId}`
    })
        .then(response => {
            dispatch(getCampaigns(userId));
        })
        .catch(err => {
            
            return dispatch(fetchFail(err.message));
        });
};

export const deleteContactData = (dispatch, userId, listId, contactId) => {

    return instance({
        method: 'put',
        url: `list/${userId}/update/${listId}/deleteContact`,
        data: {
            contactId
        }
    })
        .then(response => {
            dispatch(getLists(userId));
        })
        .catch(err => {
            dispatch(fetchFail(err.message));
        });
};
