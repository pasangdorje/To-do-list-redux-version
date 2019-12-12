import { combineReducers } from 'redux';
import toDoReducer from './toDoReducer';
import formStatusReducer from './formStatusReducer';
import taskCounterReducer from './taskCounterReducer';

const allReducers = combineReducers({
  formStatus: formStatusReducer,
  taskCounter: taskCounterReducer,
  toDoList: toDoReducer
});

export default allReducers;
