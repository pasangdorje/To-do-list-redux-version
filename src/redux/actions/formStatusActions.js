export const toggleFormStatus = () => {
  return {
    type: 'CHANGE_FORM_STATUS',
    info: 'toggle the form status between true and false'
  };
};

export const resetFormStatus = () => {
  return {
    type: 'RESET_FORM_STATUS',
    info: 'toggle the form status between true and false'
  };
};

export const setFormStatus = localData => {
  return {
    type: 'SET_FORM_STATUS',
    info: 'sets the data of local storage',
    payload: localData
  };
};
