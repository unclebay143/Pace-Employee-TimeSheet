// Server functions
import AuthService from "../../services/auth.service";
import { logOutSuccessLogger } from "../../toaster";

// Actions

export const register = ({ companyName, email, password }, action) =>{
    return AuthService.register(companyName, email, password, action)
}

export const login = ({ email, password }, action) => {
    return AuthService.login(email, password, action)
};



export const logout = () => {
    logOutSuccessLogger()
    AuthService.logout()
};

