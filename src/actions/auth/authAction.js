// Server functions
import AuthService from "../../services/auth.service";

// Actions
import {
    LOGOUT,
} from "../types";


export const register = (workSpaceName, workSpaceEmail, password) =>{
    return AuthService.register(workSpaceName, workSpaceEmail, password)
}

export const login = (username, password) => {
    return AuthService.login(username, password)
};

export const logout = () => (dispatch) => {
  console.log('hrereh');

AuthService.logout();

dispatch({
    type: LOGOUT,
});
};

