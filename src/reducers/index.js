import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import loginReducer from './loginReducer';
import userReducer from './userReducer';

//main reducer that adds all reducers!!
export default combineReducers({
    form: formReducer,
    loginReducer,
    userReducer
});
