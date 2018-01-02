import React, {Component} from 'react';
import DialogBox from '../helper/uicomponent/DialogBox';
import ErrorDialogBox from '../helper/uicomponent/ErrorDialogBox';
import MenuWrapper from './common/menu/MenuWrapper';
import Footer from '../container/common/Footer';
import LoadingSpinner from '../helper/uicomponent/LoadingSpinner';
import LoadingWrapper from '../helper/uicomponent/LoadingWrapper';
import string from '../String';

class OutterWrapper extends Component{
	constructor(props){
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}

	componentDidMount(){
		if(!this.props.app.isInitialized){
			this.props.InitAppCall();
		}
	}

	renderComponent(){
		if (!this.props.app.isInitialized)
			return ([
				<LoadingSpinner key="Loading-spinner"/>,
				<div key="global-config-text" className="global-config-text">{string.InitializingApp}</div>
			]);

		return ([
			<MenuWrapper key="menu-wrapper"/>,
			<DialogBox key="dialog-box"/>,
			<ErrorDialogBox key="error-dialog-box"/>,
			<div key="outter-wrapper-children">{this.props.children}</div>,
			<Footer key="footer"/>
		]);
	}

	render(){
		return (
			<div className="outter-wrapper clearfix">
				{this.renderComponent()}
				{this.props.ui.showLoadingWrapper && <LoadingWrapper/>}
			</div>
		);
	}
}

export default OutterWrapper;