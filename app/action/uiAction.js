
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
    	dialogType: "error",
    	errorMessage: errorMessage
    }
}