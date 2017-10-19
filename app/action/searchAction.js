import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import { apiCall } from "./appAction"

export const resetSearch = () => {
	return {
		type: "RESET_SEARCH"
	}
}

export const loadOptionCall = () => {
	return apiCall("searchOptions", setSearchOptions, string.ErrorNotAbleToLoadSearchOptions);
}

export const setSearchOptions = (options) =>{
    return {
        type: "SET_SEARCH",
        data: options
    }
}

export const setSearch = (options) =>{
    return {
        type: "SET_SEARCH",
        data: options
    }
}

export const searchCall = (query) => {
    dispatch(setSearch(query));
    return apiCall(query, loadData, string.ErrorNotAbleToLoadCourse )
}


