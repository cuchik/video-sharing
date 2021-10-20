import { combineReducers } from 'redux';
import AuthReducer from './auth';
import VideoReducer from './video';

const reducers = {
  auth: AuthReducer,
  video: VideoReducer,
};

const combinedReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
