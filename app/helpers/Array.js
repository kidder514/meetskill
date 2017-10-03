// remove a particular value from an array
export const removeValue = (array, value) => {
	var index = array.indexOf(value);
	if (index > -1) {
    	array.splice(index, 1);
    	return array;
	}else{
		return array;
	}
};

export const addArray = (mainArray, subarray) => {
	subarray.forEach( (item) =>{
		if (mainArray.indexOf(item) == -1){
			mainArray.push(item);
		}
	});
}