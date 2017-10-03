import axios from "axios";
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"

export const initSingleDish = (dish) => {
    return {
    	type: "INIT_SINGLE_DISH",
    	singleDish: dish
    }
}

export const openImgLayer = (imgs,imgIndex) => {
	document.body.style.overflow = "hidden";
    return {
    	type: "OPEN_IMG_LAYER",
    	imgLayerIsOpen:true,
    	imgs,
    	imgIndex
    }
}

export const closeImgLayer = () => {
	document.body.style.overflow = "initial";
    return {
    	type: "CLOSE_IMG_LAYER",
    	imgLayerIsOpen:false,
    	imgs:"",
    	imgIndex:""
    }
}

export const singleDishCall = (query) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('http://www.mocky.io/v2/58634a5d0f00000224175621',query)
		.then(function (res) {
			dispatch(finishLoading());
			dispatch(initSingleDish(res.data));
	  	})
	  	.catch(function (error) {
			dispatch(finishLoading());
			dispatch(popupError("Unable to load dish from server"));
	  	});
	}	
}