import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"
import { initDishListCall } from "./dishAction"

export const updateSearch = (search) => {
    return {
    	type: "UPDATE_SEARCH",
    	search
    }
}

export const updateSearchOptions = (search) => {
    return {
    	type: "UPDATE_SEARCH_OPTIONS",
    	search
    }
}

export const updateSearchOptionsCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/59660ed31100000203c8f400')
		.then(function (res) {
			dispatch(updateSearchOptions(res.data));
			dispatch(initDishListCall(query));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load search options from server"));
	  	});
	}	
}
