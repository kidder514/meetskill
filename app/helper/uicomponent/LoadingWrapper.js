import React, {Component} from 'react';
import LoadingSpinner from './LoadingSpinner';

// loading spinner overlay that covers the entire page.
class LoadingWrapper extends Component{

	render(){
		return (
			<div className="loading-wrapper-container">
				<LoadingSpinner />
			</div>
		);
	}
}

export default LoadingWrapper;