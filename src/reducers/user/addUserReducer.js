import { GET_ADD_USER } from '../../actions/types';

const initialState = []

const assignTaskReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ADD_USER:
            return {...state};
        default:
            return state;
    }
}


export default assignTaskReducer;