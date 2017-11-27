import React, { Component } from 'react';
import { connect } from "react-redux";
import { hideDialog } from "../../action/uiAction"
import Login from "../../container/section/Login"
import ForgotPassword from "../../container/section/ForgotPassword"
import Signup from "../../container/section/Signup"
import ErrorSection from "../../component/common/ErrorSection"
import IconButton from  "./IconButton"
import string from "../../String"

class DialogBox extends Component{
	constructor(props){
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
		this.renderHeader = this.renderHeader.bind(this);		
	}

	renderHeader(){
		switch (this.props.dialogType) {
			case "login":
				return string.LoginDialogHeader
			case "error":
				return string.ErrorDialogHeader
			case "forgotPassword":
				return string.ForgotPasswordDialogHeader
			case "signup":
				return string.Signup
			default:
				return string.UnknownDialogHeader;
		}
	}	
	
	renderComponent(){
		switch (this.props.dialogType) {
			case "login":
				return <Login />
			case "error":
				return <ErrorSection errorMessage={this.props.errorMessage} />
			case "forgotPassword":
				return <ForgotPassword />
			case "signup":
				return <Signup />
			default:
				 return (<div></div>);
		}
	}

    render(){
	    return (
	    	<div className={"dialog-box-Wrapper " + (this.props.isShown ? "":"hidden")}>
	    		<div className="dialog-box">
	    			<IconButton 
	    				className="text-right close-icon" 
	    				icon="highlight_off" 
	    				onClick={this.props.hide}
	    			/>
					<div className="dialog-header">
						{this.renderHeader()}
					</div>
	    			{this.renderComponent()}
	    		</div>
	    	</div>
	    )
  	}
}

const mapStateToProps = (state) => {
	return {
		isShown: state.ui.showDialogBox,
		dialogType: state.ui.dialogType,
		errorMessage: state.ui.errorMessage
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide: () => {dispatch(hideDialog())}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);