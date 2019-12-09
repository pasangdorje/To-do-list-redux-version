const taskCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCRE_TASK_COUNTER':
      return state + 1;
    default:
      return state;
  }
};
