const getNewTaskList = (oldList, newTask) => {
  const newList = [...oldList];
  newList.push(newTask);
  return newList;
};

const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return getNewTaskList(state, action.payload);
    case 'SET_LIST':
      return action.payload;
    case 'RESET_LIST':
      return [];
    default:
      return state;
  }
};

export default toDoReducer;
