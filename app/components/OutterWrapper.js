import React, {Component} from 'react';
import DialogBox from "../helpers/uicomponent/DialogBox"
import MenuWrapper from "./common/menu/MenuWrapper"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
	            <MenuWrapper />
				<DialogBox />
				{this.props.children}
	    	</div>
	    )
  	}
}

export default OutterWrapper;