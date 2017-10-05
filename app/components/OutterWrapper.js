import React, {Component} from 'react';

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
				{this.props.children}
				{/*
					<ErrorPopup />
					<LoadingSpinner />
				*/}

	    	</div>
	    )
  	}
}

export default OutterWrapper;