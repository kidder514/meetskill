import {apiCallOptions, apiCallBase} from './appAction';
import resourcePath from '../resourcePath';

export const loadCourseList = (courseList) => {
	return {
		type: 'LOAD_COURSE_LIST',
		courseList
	};
};

export const loadMyCourseList = (myCourseList) => {
	return {
		type: 'LOAD_MYCOURSE_LIST',
		myCourseList
	};
};

export const loadCategory = (category) => {
	return {
		type: 'LOAD_CATEGORY',
		category
	};
};

export const loadSingleCourse = (singleCourse) => {
	return {
		type: 'LOAD_SINGLE_COURSE',
		singleCourse: singleCourse.Data
	};
};

export const loadSingleMyCourse = (singleMyCourse) => {
	return {
		type: 'LOAD_SINGLE_MYCOURSE',
		singleMyCourse: singleMyCourse.Data
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

export const cleanSingleMyCourse = () => {
	return {
		type: 'CLEAN_SINGLE_MYCOURSE'
	};
};

const loadMyCourseListCallOptions = {...apiCallOptions,
	success: loadMyCourseList,
	loadingSection: true};
export const loadMyCourseListCall = () => {
	return apiCallBase(resourcePath.loadMyCourseList, null, 'post', loadMyCourseListCallOptions);    
};

const createNewCourseTitleOptions = {...apiCallOptions,
	success: loadSingleMyCourse,
	loadingSection: true,
	auth: true
};
export const createNewCourseTitleCall = (data) => {
	return apiCallBase(resourcePath.loadSingleMyCourse, data, 'post', createNewCourseTitleOptions);
};

const loadSingleMyCourseCallOptions = {...apiCallOptions,
	success: loadSingleMyCourse,
	loadingSection: true,
	auth: true
};
export const loadSingleMyCourseCall = () => {
	return apiCallBase(resourcePath.loadSingleMyCourse, null, 'get', loadSingleMyCourseCallOptions);
};