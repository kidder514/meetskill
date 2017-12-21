import axios from 'axios';
import { 
	showErrorDialog,
	updateServerError, 
	hideDialog, 
	updateServerSuccess } from './uiAction';
import string from '../String';
import config from '../config';
import { locate } from './userAction';
import resourcePath from '../resourcePath';
import { setSearchOptions } from './searchAction';

export const initApp = () =>{
	return {
		type: 'INIT_APP'
	};
};

export const InitAppCall = () => {
	return (dispatch, getState) => {
		const state = getState();
		if (!state.app.isInitialized) {

			if ((state.userState.location != '') && (state.userState.language != '')) {
				axios.post(config.APIserver + resourcePath.init, {
					'location': state.userState.location, 'language': state.userState.language
				})
					.then(function (res) {
						dispatch(setSearchOptions(res.data.searchOptions));
						dispatch(initApp());
					})
					.catch(function () {
						dispatch(showErrorDialog(string.ErrorNotAbleToInitApp));
					});
			} else {
				axios.post(config.APIserver + resourcePath.init, {})
					.then(function (res) {
						dispatch(locate(res.data.location));
						dispatch(setSearchOptions(res.data.searchOptions));
						dispatch(initApp());
					})
					.catch(function () {
						dispatch(showErrorDialog(string.ErrorNotAbleToInitApp));
					});
			}
		}
	};
};

export function getApiCall(query, action, errorMessage) {
	return dispatch => {
		axios.get(config.APIserver, query)
			.then(function (res) {
				dispatch(action(res.data));
			})
			.catch(function () {
				dispatch(showErrorDialog(errorMessage));
			});
	};
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
				dispatch(updateServerError(resource, error.response.data.Error.Message ));
			});
	};
}

export function authPostApiCallWithHeader(resource, data, success, postHeaders) {
	return dispatch => {
		axios.post(config.tempAPIserver + resource, data, {
			headers: postHeaders})
			.then(function (res) {
				if(success) { dispatch(success(res.data)); }
				dispatch(hideDialog());
			})
			.catch(function (error) {
				dispatch(updateServerError(resource, error.response));
			});
	};
}

export function postApiCall(resource, query, success, fail, successMessage, errorMessage) {
	return dispatch => {
		axios.post(config.tempAPIserver + resource, query)
			.then(function (res) {
				if (success){dispatch(success(res.data));}
				if (successMessage) {dispatch(updateServerSuccess(resource, successMessage));}
			})
			.catch(function (error) {
				if (fail){dispatch(fail());}
				if (errorMessage) {
					dispatch(updateServerError(resource, errorMessage));
				} else {
					dispatch(updateServerError(resource, error.response.data.Error.Message));                   
				}               
			});
	};
}

// export function deleteApiCall(resource, param, action, errorMessage) {
//  return dispatch => {};
// }

// export function putApiCall(resource, param, action, errorMessage) {
//  return dispatch => {};
// }