import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { autorizationReducer } from './autorizationReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  autorization: autorizationReducer,
});