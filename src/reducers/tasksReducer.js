import { GET_TASKS } from '../actions/types';


const initialState = [
    {
        id: '1',
        task: 'testing',
        dueDate: '12/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '2',
        task: 'testing2',
        dueDate: '14/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '3',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '4',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '5',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '6',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '7',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '8',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '9',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '10',
        task: 'testing3',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      },
      {
        id: '11',
        task: 'testing111',
        dueDate: '16/06/21',
        status: 'accept',
        requests: 'requested'
      }
]


const taskReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_TASKS:
            return {...state};
        default:
            return state;
    }
}


export default taskReducer;