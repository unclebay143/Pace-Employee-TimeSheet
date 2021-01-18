// >> Some actions are called in the auth.service helper file


// Server functions
import AuthService from "../../services/auth.service";

// Toasters
import { logOutSuccessLogger } from "../../toaster";

// Action Types
import { END_TOUR, LOGOUT } from "../types";


export const register = ({ companyName, email, password }, action) =>{
    return AuthService.register(companyName, email, password, action)
}

export const login = ({ email, password }, action) => {
    return AuthService.login(email, password, action)
};

export const endTour = () => dispatch =>{
    dispatch({type: END_TOUR})
}

export const logout = () => {
    logOutSuccessLogger()
    return AuthService.logout()
};

