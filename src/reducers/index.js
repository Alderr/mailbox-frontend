import { combineReducers } from 'redux';

import  reducer  from './reducer';
import navigateReducer from './navigateReducer';

//main reducer that adds all reducers!!
export default combineReducers({
  reducer,
  navigateReducer
});
