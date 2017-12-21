import React, { Component } from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText, 
	FormFeedback
} from 'reactstrap';
import string from "../../../String"
import validator from "validator"
import isPasswordValid from "../../../helper/passwordChecker"

class AccountAccountPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentPassword: "",
			errorCurrentPassword:"",
			newPassword: "",
			errorNewPassword: "",
			confirmNewPassword: "",
			errorConfirmNewPassword: ""
		}

		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentWillMount(){
		this.setState(this.props.userState);
	}

	componentWillUnmount(){
		this.setState(this.props.userState);		
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	submit(){
		var stateCache = {};
		var isValid = true;
		if (this.state.currentPassword == ""){
			stateCache.errorCurrentPassword = string.NoCurrentPassword;
			isValid = false;
		} else {
			stateCache.errorCurrentPassword = "";
			stateCache.currentPassword = this.state.currentPassword;
		}

		if (this.state.newPassword == ""){
			stateCache.errorNewPassword = string.NoNewPassword;
			isValid = false;
		} else if(!isPasswordValid(this.state.newPassword)){
			stateCache.errorNewPassword = string.InvalidNewPassword;
			isValid = false;
		} else if ( this.state.currentPassword == this.state.newPassword){
			stateCache.errorNewPassword = string.NewAndOldPasswordAreSame;
			isValid = false;
		} else {
			stateCache.errorNewPassword = "";
			stateCache.newPassword = this.state.newPassword;
		}

		if (this.state.confirmNewPassword == ""){
			stateCache.errorConfirmNewPassword = string.NoConfirmNewPassword;
			isValid = false;
		} else if ( this.state.confirmNewPassword != this.state.newPassword){
			stateCache.errorConfirmNewPassword = string.InvalidConfirmNewPassword;
			isValid = false;
		} else {
			stateCache.errorConfirmNewPassword = "";
			stateCache.confirmNewPassword = this.state.confirmNewPassword;
		}
		
		if (isValid){
			this.setState(stateCache,
				this.props.changePasswordCall({
					"data": {
						"email": this.props.userState.email,
						"current_password": this.state.currentPassword,
						"new_password": this.state.newPassword,
						"confirm_password": this.state.confirmNewPassword
					}
				},{
					"x-user-id": this.props.userState.uid,
					"x-access-token": this.props.userState.token
				})
			);
		}else {
			this.setState(stateCache);
		}
	}

    render(){
	    return (
	    	<div className="account-account-page">
				<div className="account-page-header">
					<h1>{string.AccountAccount}</h1>
					<p>{string.AccountAccountSubheading}</p>
				</div>
				<Form>
					<FormGroup>
						<Label for="email">{string.Email}</Label>
						<Input 
							type="text" 
							name="email" 
							value={this.props.userState.email}
							disabled={true}
						/>
						<FormText>{string.NotAbleToChangeEmail}</FormText>
					</FormGroup>
					<FormGroup>
						<Label for="currentPassword">{string.CurrentPassword}</Label>
						<Input 
							type="password" 
							name="currentPassword" 
							value={this.state.currentPassword || ""}
							valid={this.state.errorCurrentPassword == ""}
							onChange={this.onChange} 
							placeholder={string.InputYourCurrentPassword} 
						/>
						<FormFeedback>{this.state.errorCurrentPassword}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="newPassword">{string.NewPassword}</Label>
						<Input 
							type="password" 
							name="newPassword" 
							value={this.state.newPassword || ""} 
							valid={this.state.errorNewPassword == ""}
							onChange={this.onChange} 
							placeholder={string.InputNewPassword} 
						/>
						<FormFeedback>{this.state.errorNewPassword}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Label for="confirmNewPassword">{string.ConfirmNewPassword}</Label>
						<Input 
							type="password"
							name="confirmNewPassword"
							valid={this.state.errorConfirmNewPassword == ""}
							value={this.state.confirmNewPassword || ""}
							onChange={this.onChange} 
							placeholder={string.InputConfirmNewPassword} 
						/>
						<FormFeedback>{this.state.errorConfirmNewPassword}</FormFeedback>
					</FormGroup>
					<Button onClick={() => this.submit()}>{string.Submit}</Button>
				</Form>
	    	</div>
	    )
  	}
}

export default AccountAccountPage;