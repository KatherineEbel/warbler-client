import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';

export const rootReducer = combineReducers({
  currentUser,
  errors
});
