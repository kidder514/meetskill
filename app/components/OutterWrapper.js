import React, {Component} from 'react';
import DialogBox from "../helpers/uicomponent/DialogBox"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
				{this.props.children}
				<DialogBox />
	    	</div>
	    )
  	}
}

export default OutterWrapper;