import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";
import config from "../../config"
import validator from "validator"
import passwordChecker from "../../helper/passwordChecker"
import resourcePath from "../../resourcePath"

class SignupSection extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			firstName : '',
			errorFirstname : '',
			lastName : '',
			errorLastName : '', 
			email: '',
			errorEmail: '',
			password: '',
			errorPassword: '',
			confirmPassword: '',
			errorConfirmPassword: '',
			recaptcha:'',
			errorRecaptcha: '',
		};
		this.state = this.initialState;
		this.submit = this.submit.bind(this);
		this.tickRecaptcha = this.tickRecaptcha.bind(this);
		this.recaptchaExpired = this.recaptchaExpired.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		this.props.resetAllServerError();
		grecaptcha.render("signup-recaptcha", {
			'badge' : "bottomright",
			'sitekey' : config.recaptchaSiteKey,
			'callback' : this.tickRecaptcha,
			'data-size': "invisible",
			'expired-callback': this.recaptchaExpired			
		});
	}

	componentWillUnmount(){
		this.props.resetAllServerError();		
	}

	componentWillReceiveProps(nextProps){	
		if (this.props.ui.showDialogBox && (!nextProps.ui.showDialogBox)){	
			this.props.resetAllServerError();			
			this.setState(this.initialState);
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});					
	}

	tickRecaptcha(token){
		//TODO: need to add backend support for google recaptcha, 
		//now it doesn't pass the token from loginCall() to the backend bacause backend does not support it yet.
		this.setState({recaptcha: token});
	}

	recaptchaExpired(){
		this.setState({recaptcha: ''})
	}

	submit() {
		var stateCache = {};
		var isValid = true;
		if (this.state.firstName == "") {
			stateCache.errorFirstName = string.NoFirstName;
			isValid = false;
		} else if (!validator.isAlpha(this.state.firstName)) {
			stateCache.errorFirstName = string.ErrorNameFormat;
			isValid = false;			
		} else {
			stateCache.errorFirstName = "";
		}

		if (this.state.lastName == ""){
			stateCache.errorLastName = string.NoLastName;
			isValid = false;
		} else if (!validator.isAlpha(this.state.lastName)) {
			stateCache.errorLastName = string.ErrorNameFormat;
			isValid = false;			
		} else {
			stateCache.errorLastName = '';
		}

		if (this.state.email == ""){
			isValid = false;
			stateCache.errorEmail = string.NoEmail;
		} else if (!validator.isEmail(this.state.email)){
			isValid = false;
			stateCache.errorEmail = string.InvalidEmail;
		} else {
			stateCache.errorEmail = '';
		}

		if (this.state.password == "") {
			isValid = false;
			stateCache.errorPassword = string.NoPassword;
		} else if (!passwordChecker(this.state.password)){
			isValid = false;
			stateCache.errorPassword = string.InvalidPassword;
		} else {
			stateCache.errorPassword = '';
		}

		if (this.state.confirmPassword == "") {
			isValid = false;
			stateCache.errorConfirmPassword = string.NoConfirmPassword;
		} else if (this.state.password != this.state.confirmPassword){
			isValid = false;
			stateCache.errorConfirmPassword = string.InvalidConfirmPassword;
		} else {
			stateCache.errorConfirmPassword = '';
		}

		if (this.state.recaptcha == ""){
			isValid = false;
			stateCache.errorRecaptcha = string.InvalidRecaptcha;
		} else {
			stateCache.errorRecaptcha = "";
		}

		if(isValid){
			stateCache.recaptcha = this.state.recaptcha;
			this.setState(stateCache,
				this.props.signupCall({
					firstname: this.state.firstName,
					lastname: this.state.lastName,
					usertype: "student",
					email: this.state.email,
					password: this.state.password,
					confirmPassword: this.state.confirmPassword
				})
			);
		}else{
			this.setState(stateCache);
		}
	}

	render() {
		return (
			<div className="login-section">
				<div className="input-item">
					<input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder={string.FirstName} />
					<span>{this.state.errorFirstName}</span>
				</div>
				<div className="input-item">
					<input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder={string.LastName} />
					<span>{this.state.errorLastName}</span>
				</div>
				<div className="input-item">
					<input type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder={string.Email} />
					<span>{this.state.errorEmail}</span>
				</div>
				<div className="input-item">
					<input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder={string.Password} />
					<span>{this.state.errorPassword}</span>
				</div>
				<div className="input-item">
					<input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} placeholder={string.ConfirmPassword} />
					<span>{this.state.errorConfirmPassword}</span>
				</div>
				<div className="recaptcha-wrapper">
					<div id="signup-recaptcha"></div>
					<span>{this.state.errorRecaptcha}</span>
				</div>
				<div className="input-item">
					<span>{this.props.ui.serverErrorType == resourcePath.signup && this.props.ui.serverErrorMessage}</span>
					<input type="submit" onClick={() => this.submit(false)} value={string.Signup} />
				</div>
			</div>
		)
	}
}

export default SignupSection;