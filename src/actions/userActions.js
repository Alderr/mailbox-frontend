import {

    getDashboardData,
    getListsData

} from './apiCalls';

export const getDashboard = (userId) => dispatch => {
    dispatch(loading());
    return getDashboardData(dispatch, userId);

};

export const getLists = (userId) => dispatch => {
    dispatch(loading());
    return getListsData(dispatch, userId);

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
