export const increaseTaskCounter = () => {
  return {
    type: 'INCRE_TASK_COUNTER',
    info: 'increase the value of task counter'
  };
};

export const toggleFormStatus = () => {
  return {
    type: 'FORM_STATUS',
    info: 'toggle the form status between true and false'
  };
};
