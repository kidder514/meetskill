import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import { getApiCall } from "./appAction"

export const cleanData = () => {
	return {
		type: "CLEAN_DATA"
	}
}

export const loadData = (data) => {
    return {
    	type: "LOAD_DATA",
    	data: data
    }
}

export const loadDataCall = (query) => {
	return getApiCall(query, loadData, string.ErrorNotAbleToLoadCourse);
}

export const loadCategory = (category) => {
    return {
    	type: "LOAD_CATEGORIES",
    	category: category
    }
}

export const loadCategoryCall = () => {
	return getApiCall("category", loadCategory, string.ErrorNotAbleToLoadCategory);	
}

