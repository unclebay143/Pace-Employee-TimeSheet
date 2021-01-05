//  This Reducer handles REGISTRATION, LOGIN, LOGOUT

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../../actions/types";


const initialState = {
  isLoggedIn: false, 
  currentUser: {} 
};

const authReducer = (state = initialState, action) =>{
  const { type, payload } = action;
  switch (type) {

    case REGISTER_SUCCESS:
      return state;

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };

    default:
      return state;
  }
}

export default authReducer;