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