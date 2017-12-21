import string from '../String';
import { getApiCall } from './appAction';

export const loadList = (data) => {
	return {
		type: 'LOAD_LIST',
		list: data
	};
};

export const cleanList = () => {
	return {
		type: 'CLEAN_LIST'
	};
};

// todo: to fix the error message, not it is duplicated
export const loadListCall = (query) => {
	return getApiCall(query, loadList, string.ErrorNotAbleToLoadCourse);
};

export const loadCategory = (category) => {
	return {
		type: 'LOAD_CATEGORY',
		category: category
	};
};

export const cleanCategory = () => {
	return {
		type: 'CLEAN_CATEGORY'
	};
};

export const loadCategoryCall = () => {
	return getApiCall('category', loadCategory, string.ErrorNotAbleToLoadCategory); 
};

export const loadCourse = (course) => {
	return {
		type: 'LOAD_COURSE',
		course: course
	};
};


export const cleanCourse = () => {
	return {
		type: 'CLEAN_COURSE'
	};
};

// todo: to fix the error message, not it is duplicated
export const loadCourseCall = (id) => {
	return getApiCall('course' + id, loadCourse, string.ErrorNotAbleToLoadCourse);  
};