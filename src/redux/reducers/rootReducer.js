import { combineReducers } from 'redux';
import homeReducer from './pagesReducers/homeReducer';

const rootReducer = combineReducers({
  home : homeReducer
});

export default rootReducer;