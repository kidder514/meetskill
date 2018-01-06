export const resetSearch = () => {
	return {
		type: 'RESET_SEARCH'
	};
};

export const setSearchOptions = (options) =>{
	return {
		type: 'SET_SEARCH',
		data: options
	};
};

export const setSearch = (options) =>{
	return {
		type: 'SET_SEARCH',
		data: options
	};
};

// export const searchCall = (query) => {
// 	dispatch(setSearch(query));
// 	return getApiCall(query, loadList, string.ErrorNotAbleToLoadCourse);
// };

