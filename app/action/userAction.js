import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import {postApiCall} from "./appAction"
import resourcePath from "../resourcePath"

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
	return postApiCall(resourcePath.login, data, login, string.ErrorNotAbleToLogin);
}

export const signupCall = (data) => {
    return postApiCall(resourcePath.signup, data, login, string.ErrorNotAbleToSignup);
}