import React from 'react';

export const DrawStar = (rating) => {
	var starsNodes = [];

	if (rating == undefined){
		rating = 0;
	}

	for(var i = 0; i < 5;i++){
		if(rating >= 1){
			starsNodes.push(<li key={'star' + i} className="star"><i style={{fontSize: '16px'}} className="material-icons">{'star'}</i></li>);
			rating -= 1;
		}else if(rating <1 && rating > 0){
			starsNodes.push(<li key={'star' + i} className="star"><i style={{fontSize: '16px'}} className="material-icons">{'star_half'}</i></li>);
			rating -= 0.5;
		}else if(rating <= 0){
			starsNodes.push(<li key={'star' + i} className="star"><i style={{fontSize: '16px'}} className="material-icons">{'star_border'}</i></li>);
		}
	}

	return (
		<ul className="star-rating">{starsNodes}</ul>
	);
};
