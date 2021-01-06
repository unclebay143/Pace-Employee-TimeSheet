// Server functions
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";
import { logOutSuccess } from "../../toaster";

// Actions

export const register = ({ companyName, email, password }, action) =>{
    return AuthService.register(companyName, email, password, action)
}

export const login = ({ email, password }, action) => {
    return AuthService.login(email, password, action)
};

export const syncCurrentUser = (staffID) =>{
    console.log('in syn')
    return UserService.fetchUserProfile(staffID)

}

export const logout = () => {
    logOutSuccess()
    AuthService.logout()
};

