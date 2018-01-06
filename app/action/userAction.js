import {postApiCall, authPostApiCallWithHeader} from './appAction';
import resourcePath from '../resourcePath';

export const login = (data) => {
	return {
		type: 'LOGIN',
		data: data
	};
};

export const signup = (data) => {
	return {
		type: 'SIGNUP',
		data: data
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT'
	};
};

export const updateProfile = (data) => {
	return {
		type: 'UPDATE_PROFILE',
		data: data
	};
};

export const updatePhoto = (data) => {
	return {
		type: 'UPDATE_PHOTO',
		data: data
	};
};

export const setRememberLogin = (rememberLogin) => {
	return {
		type: 'SET_REMEMBER_LOGIN',
		rememberLogin : rememberLogin
	};
};

export const loginCall = (data) => {
	return postApiCall(resourcePath.login, data, login, null, true);
};

export const signupCall = (data) => {
	return postApiCall(resourcePath.signup, data, login, null, true);
};

export const updatePhotoCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.updatePhoto, data, updatePhoto, null, header);
};

export const updateProfileCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.updateProfile, data, updateProfile, null, header);
};

export const googleLoginCall = (data) => {
	return postApiCall(resourcePath.googleLogin, data, login, null, true);    
};

export const facebookLoginCall = (data) => {
	return postApiCall(resourcePath.facebookLogin, data, login, null, true);    
};


export const changePasswordCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.changePassword, data, null, null, header);
};

export const changeSettingCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.paymentAndSetting, data, null, null, header);
};

export const deleteAccountCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.deleteAccount, data, null, null, header);
};

export const activateInstructorCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.activateInstructor, data, null, null, header);
};
