import React, {Component} from 'react';

// loading spinner cover a single section.
class LoadingSectionSpinner extends Component{

	render(){
		return (
			<div className="loading-section-spinner">
				<i className="material-icons spinner-icon">refresh</i>
			</div>
		);
	}
}

export default LoadingSectionSpinner;