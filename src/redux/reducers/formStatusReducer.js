const formStatusReducer = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_FORM_STATUS':
      return !state;
    case 'SET_FORM_STATUS':
      return action.payload;
    case 'RESET_FORM_STATUS':
      return false;
    default:
      return state;
  }
};

export default formStatusReducer;
