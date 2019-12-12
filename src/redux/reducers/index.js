import { combineReducers } from 'redux';
import formStatusReducer from './formStatusReducer';
import taskCounterReducer from './taskCounterReducer';
import toDoReducer from './toDoReducer';

const allReducers = combineReducers({
  formStatus: formStatusReducer,
  taskCounter: taskCounterReducer,
  toDoList: toDoReducer
});

export default allReducers;
