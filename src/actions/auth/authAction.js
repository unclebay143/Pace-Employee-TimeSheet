// Server functions
import AuthService from "../../services/auth.service";
import { logOutSuccess } from "../../toaster";

// Actions
import {
    LOGOUT, SYNC_CURRENT_USER,
} from "../types";

export const getUserProfile = (currentUserID) => {
    return AuthService.fetchUserProfile(currentUserID)
}

export const register = ({ companyName, email, password }, action) =>{
    console.log(('in register action'));
    return AuthService.register(companyName, email, password, action)
}

export const login = ({ email, password }, action) => {
    return AuthService.login(email, password, action)
};

export const syncCurrentUser = ( currentUser ) => ( dispatch ) =>{

    dispatch({
        type: SYNC_CURRENT_USER,
        payload: currentUser
    })
}

export const logout = () => {
    console.log('logout action1');
    logOutSuccess()
    console.log('logout action2');
    AuthService.logout()
};

