import string from '../String';
import {authPostApiCall, authPostApiCallWithHeader, postApiCall} from './appAction';
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

export const loginCall = (data) => {
	return authPostApiCall(resourcePath.login, data, login);
};

export const signupCall = (data) => {
	return authPostApiCall(resourcePath.signup, data, login);
};

export const updatePhotoCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.updatePhoto, data, updatePhoto, header);
};

export const updateProfileCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.updateProfile, data, updateProfile, header);
};

export const googleLoginCall = (data) => {
	return authPostApiCall(resourcePath.googleLogin, data, login);    
};

export const facebookLoginCall = (data) => {
	return authPostApiCall(resourcePath.facebookLogin, data, login);    
};


export const changePasswordCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.changePassword, data, null, header);
};

export const recoverPasswordCall = (data) => {
	return postApiCall(
		resourcePath.recoverPassword,
		data,
		null,
		null, 
		string.EmailSentToRecoverPassword, 
		string.ErrorUnknown );
};

export const changeSettingCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.paymentAndSetting, data, null, header);
};

export const deleteAccountCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.deleteAccount, data, null, header);
};

export const activateInstructorCall = (data, header) => {
	return authPostApiCallWithHeader(resourcePath.activateInstructor, data, null, header);
};
