//  This Reducer handles REGISTRATION, LOGIN, LOGOUT

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../../actions/types";

// get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

// If user exist logged user in else log them out
const initialState = user ? { 
  isLoggedIn: true,
  user
} 
:
{
  isLoggedIn: false, 
  user: {} 
};

const authReducer = (state = initialState, action) =>{
  const { type, payload } = action;
  switch (type) {

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}

export default authReducer;