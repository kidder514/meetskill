import {apiCallOptions, apiCallBase} from './appAction';
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

export const activateInstructor = () => {
	return {
		type: 'ACTIVATE_INSTRUCTOR'
	};
};


const loginCallOptions = {...apiCallOptions,
	success: login,
	loadingOverLay: true};
export const loginCall = (data) => {
	return apiCallBase(resourcePath.login, data, 'post', loginCallOptions);
};

const signupCallOptions = {...apiCallOptions,
	success: login,
	loadingOverLay: true};
export const signupCall = (data) => {
	return apiCallBase(resourcePath.signup, data, 'post', signupCallOptions);
};

const googleLoginCallOptions = {...apiCallOptions,
	success: login,
	loadingOverLay: true};
export const googleLoginCall = (data) => {
	return apiCallBase(resourcePath.googleLogin, data, 'post', googleLoginCallOptions);    
};

const facebookLoginCallOptions = {...apiCallOptions,
	success: login,
	loadingOverLay: true};
export const facebookLoginCall = (data) => {
	return apiCallBase(resourcePath.facebookLogin, data, 'post', facebookLoginCallOptions);    
};

export const forgotPasswordCall = (data) => {
	return apiCallBase(resourcePath.recoverPassword, data, 'post', apiCallOptions);
};

export const updatePasswordCall = (data) => {
	return apiCallBase(resourcePath.updatePassword, data, 'put', apiCallOptions);
};

const changePasswordCallOptions = {...apiCallOptions,
	auth: true,
	loadingSection: true
};
export const changePasswordCall = (data) => {
	return apiCallBase(resourcePath.changePassword, data, 'post', changePasswordCallOptions);
};

const updatePhotoCallOptions = {...apiCallOptions,
	auth: true,
	loadingSection: true,
	success: updatePhoto
};
export const updatePhotoCall = (data) => {
	return apiCallBase(resourcePath.updatePhoto, data, updatePhoto, 'post', updatePhotoCallOptions);
};

const updateProfileCallOptions = {...apiCallOptions,
	auth: true,
	loadingSection: true,
	success: updateProfile
};
export const updateProfileCall = (data) => {
	return apiCallBase(resourcePath.updateProfile, data, 'post', updateProfileCallOptions);
};

const changeSettingCallOptions = {...apiCallOptions,
	auth: true,
	loadingSection: true
};
export const changeSettingCall = (data) => {
	return apiCallBase(resourcePath.paymentAndSetting, data, 'post', changeSettingCallOptions);
};

const deleteAccountCallOptions = {...apiCallOptions,
	auth: true,
	loadingSection: true
};
export const deleteAccountCall = (data) => {
	return apiCallBase(resourcePath.deleteAccount, data, 'post', deleteAccountCallOptions);
};

const activateInstructorCallOptions = {...apiCallOptions,
	auth: true,
	success: activateInstructor,
	loadingOverLay: true
};
export const activateInstructorCall = (data) => {
	return apiCallBase(resourcePath.activateInstructor, data, 'put', activateInstructorCallOptions);
};
