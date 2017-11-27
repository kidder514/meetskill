import axios from "axios";
import { showErrorDialog, updateServerError, hideDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import { getStoredState } from 'redux-persist'
import {locate} from "./userAction"
import resourcePath from "../resourcePath"
import {setSearchOptions} from "./searchAction"

export const InitAppCall = () => {
	return (dispatch, getState) => {
		const state = getState();
		if (!state.app.isInitialized) {

			if ((state.userState.location != "") && (state.userState.language != "")) {
				axios.post(config.APIserver + resourcePath.init, {
					"location": state.userState.location, "language": state.userState.language
				})
				.then(function (res) {
					dispatch(setSearchOptions(res.data.searchOptions));
					dispatch(initApp());
				})
				.catch(function (error) {
					dispatch(showErrorDialog(string.ErrorNotAbleToInitApp))
				});
			} else {
				axios.post(config.APIserver + resourcePath.init, {})
				.then(function (res) {
					dispatch(locate(res.data.location));
					dispatch(setSearchOptions(res.data.searchOptions));
					dispatch(initApp());
				})
				.catch(function (error) {
					dispatch(showErrorDialog(string.ErrorNotAbleToInitApp))
				});
			}
		}
	}
}

export const initApp = () =>{
    return {
        type: "INIT_APP"
    }
}

export function getApiCall(query, action, errorMessage) {
	return dispatch => {
		axios.get(config.APIserver, query)
			.then(function (res) {
				dispatch(action(res.data));
				if(callback != undefined){callback();}
			})
			.catch(function (error) {
				dispatch(showErrorDialog(errorMessage));
			});
	}
}


// resource: api resource
// query: query paremeters
// success: success action
// successParam: if it is not null or undefined, pass it to the success action
// failure: failure action
// failureParam: if it is not null or undefined, pass it to the failure action
export function authPostApiCall(resource, query, success) {
	return dispatch => {
		axios.post(config.tempAPIserver + resource, query)
			.then(function (res) {
				dispatch(success(res.data));
				dispatch(hideDialog());
			})
			.catch(function (error) {
				dispatch(updateServerError(error.response.data.Error.Message))									
			});
	}
}

export function deleteApiCall(resource, param, action, errorMessage) {
	return dispatch => {};

}

export function putApiCall(resource, param, action, errorMessage) {
	return dispatch => {};
}