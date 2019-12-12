export const addToDo = newTask => {
  return {
    type: 'ADD_TO_DO',
    info: 'action related to the to-do list',
    payload: newTask
  };
};

export const resetList = () => {
  return {
    type: 'RESET_LIST',
    info: 'clear the task list and all store'
  };
};

export const setList = localData => {
  return {
    type: 'SET_LIST',
    info: 'sets the data of local storage',
    payload: localData
  };
};
