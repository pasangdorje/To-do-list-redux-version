export const increaseTaskCounter = () => {
  return {
    type: 'INCRE_TASK_COUNTER',
    info: 'increase the value of task counter'
  };
};

export const resetTaskCounter = () => {
  return {
    type: 'RESET_TASK_COUNTER',
    info: 'reset the value of task counter'
  };
};

export const setTaskCounter = localData => {
  return {
    type: 'SET_TASK_COUNTER',
    info: 'sets the data of local storage',
    payload: localData
  };
};
