import { GET_TASKS } from '../actions/types'


const initialState = [
    {
        "taskName": "build a jet",
        "duedate": "12-12-2020"
    },
    {
        "taskName": "come home",
        "duedate": "12-12-2021"
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