
export const showLoading = () => {
	return {
		type: 'SHOW_LOADING',
	};
};

export const hideLoading = () => {
	return {
		type: 'HIDE_LOADING',
	};
};

export const showDialog = (dialogType) => {
	return {
		type: 'SHOW_DIALOG',
		dialogType: dialogType
	};
};

export const hideDialog = () => {
	return {
		type: 'HIDE_DIALOG'
	};
};

export const showErrorDialog = (errorMessage) => {
	return {
		type: 'SHOW_ERROR',
		errorMessage: errorMessage
	};
};

export const hideErrorDialog = () => {
	return {
		type: 'HIDE_ERROR'
	};
};

export const updateServerError = (resource, serverErrorMessage) => {
	return {
		type: 'UPDATE_SERVER_ERROR',
		resource: resource,
		serverErrorMessage: serverErrorMessage
	};
};

export const resetServerError = () => {
	return { type: 'RESET_SERVER_ERROR' };
};

export const updateServerSuccess = (resource, serverErrorMessage) => {
	return {
		type: 'UPDATE_SERVER_SUCCESS',
		resource: resource,
		serverSuccessMessage: serverErrorMessage
	};
};

export const resetServerSuccess = () => {
	return { type: 'RESET_SERVER_SUCCESS' };
};

export const resetAllServerError = () => {
	return { type: 'RESET_ALL_SERVER_MESSAGE' };
};
