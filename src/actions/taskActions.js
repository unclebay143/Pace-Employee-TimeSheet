import { GET_TASKS, ASSIGN_TASKS, GET_ACCEPTED_TASKS } from './types';

// getTask action
export const getTasks = () => {
  return {
    type:GET_TASKS
  };
};

// assignTask action
export const assignTask = (task) => {
  return {
    type:ASSIGN_TASKS,
    payload: task
  };
};

// getAcceptedTask action
export const getAcceptedTask = () => {
  return {
    type:GET_ACCEPTED_TASKS,
  };
};