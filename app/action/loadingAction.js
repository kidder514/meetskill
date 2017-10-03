export const startLoading = () => {
	return {
		type: "START_LOADING",
		loading: true
	};
};

export const finishLoading = () => {
	return {
		type:"FINISH_LOADING",
		loading: false
	};
};
