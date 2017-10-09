import React, {Component} from 'react';
import DialogBox from "../helpers/uicomponent/DialogBox"
import Menu from "../containers/common/menu/Menu"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
	            <Menu />
				<DialogBox />
				{this.props.children}
	    	</div>
	    )
  	}
}

export default OutterWrapper;