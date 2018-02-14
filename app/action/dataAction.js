import {apiCallOptions, apiCallBase} from './appAction';
import resourcePath from '../resourcePath';

export const loadCourseList = (list) => {
	return {
		type: 'LOAD_COURSE_LIST',
		list
	};
};

export const loadMyCourseList = (list) => {
	return {
		type: 'LOAD_MYCOURSE_LIST',
		list
	};
};

export const loadCategory = (category) => {
	return {
		type: 'LOAD_CATEGORY',
		category
	};
};

export const loadCourse = (course) => {
	return {
		type: 'LOAD_SINGLE_COURSE',
		course
	};
};

export const cleanCourseList = () => {
	return {
		type: 'CLEAN_COURSE_LIST'
	};
};

export const cleanMyCourseList = () => {
	return {
		type: 'CLEAN_MYCOURSE_LIST',
	};
};

export const cleanCategory = () => {
	return {
		type: 'CLEAN_CATEGORY'
	};
};

export const cleanSingleCourse = () => {
	return {
		type: 'CLEAN_SINGLE_COURSE'
	};
};

const loadMyCourseListCallOptions = {...apiCallOptions,
	success: loadMyCourseList,
	loadingSection: true};
export const loadMyCourseListCall = () => {
	return apiCallBase(resourcePath.loadMyCourseList, null, 'post', loadMyCourseListCallOptions);    
};