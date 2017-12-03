import axios from "axios";
import string from "../String"
import config from "../config"
import {authPostApiCall, postApiCall} from "./appAction"
import resourcePath from "../resourcePath"
import {updateServerError} from "./uiAction"

export const login = (data) => {
	return {
        type: "LOGIN",
        data: data
	}
}

export const signup = (data) => {
    return {
        type: "SIGNUP",
        data: data
    }
}

export const logout = () => {
    return {
    	type: "LOGOUT"
    }
}

export const locate = (data) => {
    return {
        type: "LOCATE",
        data: data
    }
}

export const unlocate = () => {
    return {
    	type: "UNLOCATE"
    }
}

export const loginCall = (data) => {
	return authPostApiCall(resourcePath.login, data, login);
}

export const signupCall = (data) => {
    return authPostApiCall(resourcePath.signup, data, login);
}

export const googleLoginCall = (data) => {
    return authPostApiCall(resourcePath.googleLogin, data, login);    
}

export const facebookLoginCall = (data) => {
    return authPostApiCall(resourcePath.facebookLogin, data, login);    
}

export const recoverPasswordCall = (data) => {
    return postApiCall(
        resourcePath.recoverPassword,
        data,
        null,
        null, 
        string.EmailSentToRecoverPassword, 
        string.ErrorUnknown );
}