import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import { getApiCall } from "./appAction"

export const buyCourse = (id) => {
    return {
    	type: "BUY_COURSE",
    	id: id
    }
}

export const addToCart = (id) => {
    return {
    	type: "ADD_TO_CART",
    	id: id
    }
}
