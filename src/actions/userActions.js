import { getDashboardData } from './apiCalls';

export const getDashboard = (userId) => dispatch => {
    dispatch(loading());
    return getDashboardData(dispatch, userId);

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

export const GETUSER_FAIL = 'GETUSER_FAIL';

export const getDashboardFail = (error) => ({
    type: GETUSER_FAIL,
    error
});
