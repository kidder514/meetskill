import React, {Component} from 'react';
import ErrorPopup from "../containers/common/ErrorPopup";
import LoadingSpinner from "../containers/common/LoadingSpinner";
import ImgLayer from "../containers/common/ImgLayer"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
				{this.props.children}
					<ErrorPopup />
					<LoadingSpinner />
					<ImgLayer />
	    	</div>
	    )
  	}
}

export default OutterWrapper;