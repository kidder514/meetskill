
export const showDialog = (dialogType) => {
    return {
    	type: "SHOW_DIALOG",
    	dialogType: dialogType
    }
}

export const hideDialog = () => {
    return {
    	type: "HIDE_DIALOG"
    }
}

export const showErrorDialog = (errorMessage) => {
    return {
    	type: "SHOW_ERROR",
    	errorMessage: errorMessage
    }
}

export const hideErrorDialog = () => {
    return {
    	type: "HIDE_ERROR"
    }
}

export const updateServerLoginError = (serverLoginError) => {
    return {
    	type: "UPDATE_LOGIN_ERROR",
    	serverLoginError: serverLoginError
    }
}

export const resetServerLoginError = () => {
    return { type: "RESET_LOGIN_ERROR" }
}

export const updateServerSignupError = (serverSignupError) => {
    return {
    	type: "UPDATE_SIGNUP_ERROR",
    	serverSignupError: serverSignupError
    }
}

export const resetServerSignupError = () => {
    return { type: "RESET_SIGNUP_ERROR" }
}

export const updateServerGoogleLoginError = (serverGoogleLoginError) => {
    return {
    	type: "UPDATE_GOOGLE_LOGIN_ERROR",
    	serverGoogleLoginError: serverGoogleLoginError
    }
}

export const resetServerGoogleLoginError = () => {
    return { type: "RESET_GOOGLE_LOGIN_ERROR" }
}

export const updateServerFacebookLoginError = (serverFacebookLoginError) => {
    return {
    	type: "UPDATE_FACEBOOK_LOGIN_ERROR",
    	serverFacebookLoginError: serverFacebookLoginError
    }
}

export const resetServerFacebookLoginError = () => {
    return { type: "RESET_FACEBOOK_LOGIN_ERROR" }
}

export const resetAllServerError = () => {
    return { type: "RESET_ALL_SERVER_ERROR" }
}