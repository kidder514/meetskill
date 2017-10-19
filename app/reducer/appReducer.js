const initialState = {
     isInitialized: false
};

function app(state = initialState, action) {
  	switch (action.type){
  		case "INIT_APP":
	    	return { ...state,
                isInitialized: true
    		};
	    default:
	    	return state;
    }
}

export default app