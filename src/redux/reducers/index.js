import formStatusReducer from './formStatusReducer';
import taskCounterReducer from './taskCounterReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  formStatus: formStatusReducer,
  taskCounter: taskCounterReducer
});

export default allReducers;
