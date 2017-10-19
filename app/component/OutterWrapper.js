import React, {Component} from 'react';
import DialogBox from "../helper/uicomponent/DialogBox"
import MenuWrapper from "./common/menu/MenuWrapper"
import Footer from "../container/common/Footer"
import LoadingSpinner from "../helper/uicomponent/LoadingSpinner"
import string from "../String"

class OutterWrapper extends Component{
	constructor(props){
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}

	componentDidMount(){
		if(!this.props.app.isInitialized){
			this.props.InitApp();
		}
	}

	renderComponent(){
		return ([
			<MenuWrapper />,
			<DialogBox />,
			this.props.children,
			<Footer />
		]);
	}

    render(){
	    return (
	    	<div className="outter-wrapper clearfix">
			{this.props.app.isInitialized ? (this.renderComponent) : (
				<div>
					<LoadingSpinner/>
					<div className="global-config-text">{string.InitializingApp}</div>
				</div>
			)}
	    	</div>
	    )
  	}
}

export default OutterWrapper;