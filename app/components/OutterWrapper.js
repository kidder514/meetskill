import React, {Component} from 'react';
import LoadingSpinner from "../helpers/uicomponent/LoadingSpinner"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
				{this.props.children}
				<LoadingSpinner />
				
				{/*
					<ErrorPopup />
				*/}

	    	</div>
	    )
  	}
}

export default OutterWrapper;