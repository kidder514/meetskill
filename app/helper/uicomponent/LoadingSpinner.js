import React, {Component} from 'react';

// loading spinner cover a single section.
class LoadingSpinner extends Component{

	render(){
		return (
			<div className="loading-spinner">
				<i className="material-icons spinner-icon">refresh</i>
			</div>
		);
	}
}

export default LoadingSpinner;