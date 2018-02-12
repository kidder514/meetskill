import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideDialog, showDialog } from '../../action/uiAction';
import Login from '../../container/section/Login';
import ForgotPassword from '../../container/section/ForgotPassword';
import Signup from '../../container/section/Signup';
import ErrorSection from '../../component/common/ErrorSection';
import IconButton from  './IconButton';
import string from '../../String';

class DialogBox extends Component{
	constructor(props){
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
		this.renderHeader = this.renderHeader.bind(this);       
	}

	renderHeader() {
		switch (this.props.dialogType) {
		case 'login':
			return string.LoginDialogHeader;
		case 'error':
			return string.ErrorDialogHeader;
		case 'forgotPassword':
			return string.ForgotPasswordDialogHeader;
		case 'signup':
			return string.SignupDialogHeader;
		default:
			return string.UnknownDialogHeader;
		}
	}   
    
	renderComponent(){
		switch (this.props.dialogType) {
		case 'login':
			return <Login />;
		case 'error':
			return <ErrorSection errorMessage={this.props.errorMessage} />;
		case 'forgotPassword':
			return <ForgotPassword />;
		case 'signup':
			return <Signup />;
		default:
			return (<div></div>);
		}
	}

	render(){
		return (
			<div onClick={this.props.hideDialog} className={'dialog-box-Wrapper ' + (this.props.isShown ? '':'hidden')}>
				<div onClick={(event) => event.stopPropagation()} className="dialog-box">
					{(this.props.dialogType != 'login') && 
						<div className="dialog-back-button" onClick={() => this.props.showDialog('login')}>
							<IconButton 
								icon="chevron_left" 
							/>
							{string.BackToLogin}
						</div>
					}
					<IconButton 
						className="close-icon" 
						icon="clear" 
						onClick={this.props.hideDialog}
					/>
					<div className="dialog-header header">
						{this.renderHeader()}
					</div>
					{this.renderComponent()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isShown: state.ui.showDialogBox,
		dialogType: state.ui.dialogType,
		errorMessage: state.ui.errorMessage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		hideDialog: () => {dispatch(hideDialog());},
		showDialog: (name) => {dispatch(showDialog(name));} 
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);