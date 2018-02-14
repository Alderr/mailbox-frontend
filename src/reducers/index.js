import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


import  reducer  from './reducer';
import navigateReducer from './navigateReducer';
import loginReducer from './loginReducer';
import listReducer from './listReducer';
import campaignReducer from './campaignReducer';

//main reducer that adds all reducers!!
export default combineReducers({
    form: formReducer,
    reducer,
    navigateReducer,
    loginReducer,
    listReducer,
    campaignReducer
});
