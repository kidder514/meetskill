import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"

function apiCall(query, action, errorMessage){
	return dispatch => {
		axios.get(config.APIserver,query)
		.then(function (res) {
			dispatch(action(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(ShowErrorDialog(errorMessage));
	  	});
	}	
}

export const loadData = (data) => {
    return {
    	type: "LOAD_DATA",
    	data: data
    }
}

export const loadDataCall = (query) => {
	return apiCall(query, loadData, string.ErrorNotAbleToLoadCourse);
}

export const loadCategory = (category) => {
    return {
    	type: "LOAD_CATEGORIES",
    	category: category
    }
}

export const loadCategoryCall = () => {
	return apiCall("category", loadCategory, string.ErrorNotAbleToLoadCategory);	
}

