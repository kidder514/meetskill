
var initialSearchState = {
    searchOptions:"",
	location: "",
	coordinate: "",
	keyword: "",
	category: "All",
	region: "All",
	allergen: "None",
	ratio: "1",
	options:["All", "Eatin", "Self-pickup", "Home-Delivery"],
	fromKitchen:["All", "Commercial Kitchen", "Home Kitchen"],
	orderBy:"Newest",
	date:["today","tomorrow","further"]
}

function searchReducer(state = initialSearchState, action) {
  	switch (action.type){
	    case "UPDATE_SEARCH":
	    	return {
	    		location: action.search.location,
	    		coordinate: action.search.coordinate,
	    		keyword: action.search.keyword,
	    		category: action.search.category,
	    		region: action.search.region,
	    		allergen: action.search.allergen,
	    		ratio: action.search.ratio,
	    		options: action.search.options,
	    		fromKitchen: action.search.fromKitchen,
	    		orderBy: action.search.orderBy,
	    		date: action.search.date,
	    		searchOptions:state.searchOption,
	    	};
	    case "UPDATE_SEARCH_OPTIONS":
	    	return Object.assign({}, state, { searchOptions: action.search });
	    default:
	    	return state
    }
}

export default searchReducer