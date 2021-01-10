import { GET_EMPLOYEES } from '../../actions/types';

const initialState = []

const assignTaskReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_EMPLOYEES:
            return {...state};
        default:
            return state;
    }
}


export default assignTaskReducer;