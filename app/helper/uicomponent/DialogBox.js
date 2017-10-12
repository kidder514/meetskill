import React, { Component } from 'react';
import { connect } from "react-redux";
import { hideDialog } from "../../action/uiAction"
import Login from "../../container/section/Login"
import ErrorSection from "../../component/common/ErrorSection"
import IconButton from  "./IconButton"

class DialogBox extends Component{
	constructor(props){
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}

	renderComponent(){
		switch (this.props.dialogType) {
			case "login":
				return <Login />
			case "error":
				return <ErrorSection errorMessage={this.props.errorMessage} />
			default:
				 return (<div></div>);
		}
	}

    render(){
	    return (
	    	<div className={"dialog-box-Wrapper " + (this.props.isShown ? "":"hidden")}>
	    		<div className="dialog-box">
	    			<IconButton 
	    				className="text-right" 
	    				icon="highlight_off" 
	    				onClick={this.props.hide}
	    			/>
	    			{this.renderComponent()}
	    			{"this is dialog box"}
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