import string from '../String';
import { postApiCall } from './appAction';

export const resetSearch = () => {
	return {
		type: 'RESET_SEARCH'
	};
};

export const loadSearchOptionCall = (location, language) => {
	return postApiCall('searchOptions',
		{'location': location, 'language': language},
		setSearchOptions,
		string.ErrorNotAbleToLoadSearchOptions);
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

