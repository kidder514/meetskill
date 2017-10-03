import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const initHomeFoodDishAction = (dish) => {
    return {
    	type: "INIT_DISH",
    	newDish: dish
    }
}

export const initMyDishAction = (dish) => {
    return {
    	type: "INIT_MY_DISH",
    	newDish: dish
    }
}


export const initDishListCall = (query) => {
	return dispatch => {
		axios.get('http://www.mocky.io/v2/596714a3110000cd0db6c077',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initHomeFoodDishAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes from server"));
	  	});
	}	
}

export const dishListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/596714a3110000cd0db6c077',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initHomeFoodDishAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes from server"));
	  	});
	}	
}

export const myDishListCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/596714a3110000cd0db6c077',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initMyDishAction(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dishes from server"));
	  	});
	}	
}
