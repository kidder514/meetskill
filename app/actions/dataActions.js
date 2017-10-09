import axios from "axios";
import { ShowErrorDialog } from "./uiActions";
import strings from "../Strings"
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
	return apiCall(query, loadData, strings.ErrorNotAbleToLoadCourses);
}

export const loadCategories = (categories) => {
    return {
    	type: "LOAD_CATEGORIES",
    	categories: categories
    }
}

export const loadCategoriesCall = () => {
	return apiCall("categories", loadCategories, strings.ErrorNotAbleToLoadCategories);	
}

