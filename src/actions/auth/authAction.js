// Server functions
import AuthService from "../../services/auth.service";

// Actions
import {
    LOGOUT,
} from "../types";

export const getUserProfile = () => {
    return AuthService.fetchUserProfile()
}

export const register = ({ companyName, email, password }, action) =>{
    return AuthService.register(companyName, email, password, action)
}

export const login = ({ email, password }, action) => {
    return AuthService.login(email, password, action)
};

export const logout = () => (dispatch) => {

    localStorage.clear()
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

