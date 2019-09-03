import { combineReducers } from 'redux';
import homeReducer from './pagesReducers/homeReducer';
import component1Reducer from './component1Reducers/component1Reducer';

const rootReducer = combineReducers({
  home : homeReducer,
  component1 : component1Reducer
});

export default rootReducer;