
const initialUIState = {
	errorMessage : "",
	loading:false,
	imgs:"",
	imgIndex:"",
	imgLayerIsOpen:false,
	showUserMenu: false
}

function uiReducer(state = initialUIState, action) {
  switch(action.type){
    case "ERROR_POPUP":
        return {...state, errorMessage: action.message}
    case "START_LOADING":
    	return {...state, loading: action.loading}
    case "FINISH_LOADING":
    	return {...state, loading: action.loading}
    case "OPEN_IMG_LAYER":
    	return {...state, imgLayerIsOpen: action.imgLayerIsOpen, imgs: action.imgs, imgIndex: action.imgIndex}
    case "CLOSE_IMG_LAYER":
    	return {...state, imgLayerIsOpen: action.imgLayerIsOpen, imgs: "", imgIndex: ""}
    case "SHOW_USER_MENU":
    	return {...state, showUserMenu: action.isShown}
    default:
    	return state
    }
}

export default uiReducer