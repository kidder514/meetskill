import React, {Component} from 'react';
import DialogBox from "../helper/uicomponent/DialogBox"
import MenuWrapper from "./common/menu/MenuWrapper"
import Footer from "../container/common/Footer"

class OutterWrapper extends Component{

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
	            <MenuWrapper />
				<DialogBox />
				{this.props.children}
				<Footer />
	    	</div>
	    )
  	}
}

export default OutterWrapper;