
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

export const updateServerError = (serverError) => {
    return {
    	type: "UPDATE_SERVER_ERROR",
    	serverError: serverError
    }
}

export const resetServerError = () => {
    return {
    	type: "RESET_SERVER_ERROR"
    }
}