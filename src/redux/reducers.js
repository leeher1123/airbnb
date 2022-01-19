import { combineReducers } from 'redux';

import sharedReducer from '../views/shared/redux/reducer';

const reducers = combineReducers({
  shared: sharedReducer,
});

export default reducers;
