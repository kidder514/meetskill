import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const initCookAction = (cook) => {
    return {
    	type: "INIT_COOK_PAGE",
    	cook: cook
    }
}

export const cookInfoCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initCookAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes from server"));
	  	});
	}	
}

