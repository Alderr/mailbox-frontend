import { combineReducers } from 'redux';

import  reducer  from './reducer';
import navigateReducer from './navigateReducer';
import loginReducer from './loginReducer';
import listReducer from './listReducer';
import campaignReducer from './campaignReducer';

//main reducer that adds all reducers!!
export default combineReducers({
    reducer,
    navigateReducer,
    loginReducer,
    listReducer,
    campaignReducer
});
