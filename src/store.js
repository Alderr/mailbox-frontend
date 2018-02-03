import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(createLogger())
  ),
);
