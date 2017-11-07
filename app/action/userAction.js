import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import {postApiCall} from "./appAction"

export const login = (data) => {
	return {
        type: "LOGIN",
        data: data
	}
}


export const loginCall = (query) => {
	return postApiCall("auth/login", query, login, string.ErrorNotAbleToLogin);
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

