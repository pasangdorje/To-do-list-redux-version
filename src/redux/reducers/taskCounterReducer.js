const taskCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCRE_TASK_COUNTER':
      return state + 1;
    case 'SET_TASK_COUNTER':
      return action.payload;
    case 'RESET_TASK_COUNTER':
      return 0;
    default:
      return state;
  }
};

export default taskCounterReducer;
