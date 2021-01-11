//  This Reducer handles REGISTRATION, LOGIN, LOGOUT

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SYNC_CURRENT_USER,
  END_TOUR,
} from "../../actions/types";


const initialState = {
  isLoggedIn: false, 
  currentUser: {},
  isFirstTimer: false,
  error: null,
};

const authReducer = (state = initialState, action) =>{
  const { type, payload } = action;
  switch (type) {

    case REGISTER_SUCCESS:
      return  {
        ...state,
        isFirstTimer: true
      }
      
    case END_TOUR:
      return {
        ...state,
        isFirstTimer: false
      }

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
        error: payload
      };
    
    case SYNC_CURRENT_USER:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload
      }

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