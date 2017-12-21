export const buyCourse = (id) => {
	return {
		type: 'BUY_COURSE',
		id: id
	};
};

export const addToCart = (id) => {
	return {
		type: 'ADD_TO_CART',
		id: id
	};
};
