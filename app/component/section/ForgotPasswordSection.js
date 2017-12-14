import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";
import validator from "validator"
import resourcePath from "../../resourcePath"

class ForgotPasswordSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			errorEmail: ""
		};
		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount(){
		this.props.resetAllServerError();
	}

	componentWillUnmount(){
		this.props.resetAllServerError();		
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});					
	}

	submit() {
		this.props.resetAllServerError();
		if(validator.isEmail(this.state.email)){
			this.props.recoverPasswordCall({email: this.state.email});
		} else if (this.state.email == ""){	
			this.setState({errorEmail: string.NoEmail});			
		} else {	
			this.setState({errorEmail: string.InvalidEmail});			
		}
	}

	render() {
		var ui = this.props.ui;
		return (
			<div className="login-section">
				<span>{string.EnterEmailToResetPassword}</span>				
				<div className="input-item">
					<input type="text" name="email" onChange={this.onChange} placeholder={string.Email} />
					<span>{this.state.errorEmail}</span>
				</div>
				<div className="input-item">
					<span>{ui.serverErrorType == resourcePath.recoverPassword && ui.serverErrorMessage}</span>
					<span>{ui.serverSuccessType == resourcePath.recoverPassword && ui.serverSuccessMessage}</span>
					<input type="submit" onClick={this.submit} value={string.ResetPassword} />
				</div>
			</div>
		)
	}
}

export default ForgotPasswordSection;