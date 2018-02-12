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

export function apiCallBase(resource, data, method, apiCallOptions = apiCallOptions){
	return (dispatch, getState) => {
		if (apiCallOptions.loadingOverLay) dispatch(showLoading());
		if (apiCallOptions.loadingSection) dispatch(showSectionLoading(resource));		
		axios({
			method: method,
			url: config.tempAPIserver + resource,
			data: data,
			headers: apiCallOptions.auth ? {
				'x-user-id': getState().userState.uid,
				'x-access-token': getState().userState.token
			} : null})
			.then(function (res) {
				if (apiCallOptions.loadingOverLay) dispatch(hideLoading());
				if (apiCallOptions.loadingSection) dispatch(hideSectionLoading());	
				if (apiCallOptions.success) { dispatch(apiCallOptions.success(res.data)); }
				dispatch(updateServerError(resource,''));
				if (resource.indexOf('auth') != -1 ||
					resource.indexOf('login') != -1 ||
					resource.indexOf('signup') != -1)
					dispatch(hideDialog());	
			})
			.catch(function (error) {
				if (apiCallOptions.loadingOverLay) dispatch(hideLoading());
				if (apiCallOptions.loadingSection) dispatch(hideSectionLoading());				
				if (apiCallOptions.failure) { dispatch(apiCallOptions.failure(error.response.data)); }				
				dispatch(updateServerError(resource, error.response));
			});
	};
}


export const apiCallOptions = {
	auth: false,
	success: () => {},
	failure: () => {},
	loadingOverLay: false,
	loadingSection: false
};
