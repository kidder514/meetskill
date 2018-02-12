import axios from 'axios';
import { 
	showErrorDialog,
	updateServerError, 
	hideDialog } from './uiAction';
import string from '../String';
import config from '../config';
import { locate } from './userAction';
import { setSearchOptions } from './searchAction';
import { 
	showLoading, 
	hideLoading, 
	showSectionLoading, 
	hideSectionLoading 
} from './uiAction';

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
				axios.post(config.APIserver, {
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
				axios.post(config.APIserver, {})
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
export function postApiCall(resource, query, success, failure, loadingOverLay, loadingSection ) {
	return dispatch => {
		if (loadingOverLay) dispatch(showLoading());
		if (loadingSection) dispatch(showSectionLoading(resource));		
		axios.post(config.tempAPIserver + resource, query)
			.then(function (res) {
				if (loadingOverLay) dispatch(hideLoading());
				if (loadingSection) dispatch(hideSectionLoading());	
				if (success) dispatch(success(res.data));
				if (resource.indexOf('auth') != -1 ||
					resource.indexOf('login') != -1 ||
					resource.indexOf('signup') != -1)
					dispatch(hideDialog());
			})
			.catch(function (error) {
				if (loadingOverLay) dispatch(hideLoading());
				if (loadingSection) dispatch(hideSectionLoading());	
				if (failure) dispatch(failure(error.data));
				dispatch(updateServerError(resource, error.response.data.Error.Message ));
			});
	};
}

export function authPostApiCallWithHeader(resource, data, success, failure, postHeaders, loadingOverLay, loadingSection) {
	return dispatch => {
		if (loadingOverLay) dispatch(showLoading());
		if (loadingSection) dispatch(showSectionLoading(resource));		
		axios.post(config.tempAPIserver + resource, data, {
			headers: postHeaders})
			.then(function (res) {
				if (loadingOverLay) dispatch(hideLoading());
				if (loadingSection) dispatch(hideSectionLoading());	
				if (success) { dispatch(success(res.data)); }
			})
			.catch(function (error) {
				if (loadingOverLay) dispatch(hideLoading());
				if (loadingSection) dispatch(hideSectionLoading());		
				dispatch(updateServerError(resource, error.response));
			});
	};
}


// export function deleteApiCall(resource, param, action, errorMessage) {
//  return dispatch => {};
// }

// export function putApiCall(resource, param, action, errorMessage) {
//  return dispatch => {};
// }

