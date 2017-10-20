import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"

export const login = (data) => {
	return {
        type: "LOGIN",
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

