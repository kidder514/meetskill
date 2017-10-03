import axios from "axios"
import {popupError} from "./errorAction";
import {startLoading, finishLoading} from "./loadingAction"
import config from "../config"

export const loginAction = (data) => {
	return { type: "LOGIN", data}
}

export const logoutAction = () => {
	return { type: "LOGOUT" }
}

export const loadUserDataAction = (data) => {
	return { type: "LOAD_USER_DATA", data}
}

export const setAddress = (addressObj) => {
	return {
		type: "LOCATE",
		action: addressObj
	};
};

//TODO: handle the backend data.
export const loginCall = (userInfo, rememberLogin) => {
	return dispatch => {
		dispatch(startLoading());
		axios.get("http://www.mocky.io/v2/595247070f00000501a3d7f5", userInfo)
		.then((res)=>{
			res.data.rememberLogin = rememberLogin;
			dispatch(loginAction(res.data));
			dispatch(finishLoading());
			})
		.catch((error)=>{
			dispatch(finishLoading())
			dispatch(popupError("Unable to login"));
		})
	}
}

export const signupCall = (userInfo) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "auth/signup", userInfo)
		.then((res)=>{
			//TODO: assemble and push the data into store.
			console.log("login successfully");
			dispatch(finishLoading())}
			//TODO: go to the page that you can add user's password and address
			// use userId as parameter of the page and then send to the backend togather.
			)
		.catch((error)=>{
			dispatch(finishLoading())
			dispatch(popupError("Unable to signup"))
			})
	}
}

export const userDataCall = (userId) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post(config.APIserver + "userdata", userId)
		.then((res)=>{
			console.log("user data retrieved successfully");
			dispatch(finishLoading())
			})
		.catch((error)=>{
			dispatch(finishLoading())
			dispatch(popupError("user data retrieved failed"))
			})
	}
}
