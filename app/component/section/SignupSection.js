import React, { Component } from 'react';
import string from '../../String';
import config from '../../config';
import validator from 'validator';
import passwordChecker from '../../helper/passwordChecker';
import resourcePath from '../../resourcePath';
import { 
	Button, 
	Form, 
	FormGroup, 
	Input, 
	FormFeedback
} from 'reactstrap';

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
			rememberLogin: ''
		};
		this.state = this.initialState;
		this.submit = this.submit.bind(this);
		this.tickRecaptcha = this.tickRecaptcha.bind(this);
		this.recaptchaExpired = this.recaptchaExpired.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		this.props.resetAllServerError();
		window.grecaptcha.render('signup-recaptcha', {
			'badge' : 'bottomright',
			'sitekey' : config.recaptchaSiteKey,
			'callback' : this.tickRecaptcha,
			'data-size': 'invisible',
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
		if ( e.target.name == 'rememberLogin') {
			this.setState({[e.target.name]: (e.target.checked ? 1 : 0)});
		} else {
			this.setState({[e.target.name]: e.target.value});                   
		}                 
	}

	tickRecaptcha(token){
		//TODO: need to add backend support for google recaptcha, 
		//now it doesn't pass the token from loginCall() to the backend bacause backend does not support it yet.
		this.setState({recaptcha: token});
	}

	recaptchaExpired(){
		this.setState({recaptcha: ''});
	}

	submit() {
		var stateCache = {};
		var isValid = true;
		if (this.state.firstName == '') {
			stateCache.errorFirstName = string.NoFirstName;
			isValid = false;
		} else if (!validator.isAlpha(this.state.firstName)) {
			stateCache.errorFirstName = string.ErrorNameFormat;
			isValid = false;            
		} else {
			stateCache.errorFirstName = '';
		}

		if (this.state.lastName == ''){
			stateCache.errorLastName = string.NoLastName;
			isValid = false;
		} else if (!validator.isAlpha(this.state.lastName)) {
			stateCache.errorLastName = string.ErrorNameFormat;
			isValid = false;            
		} else {
			stateCache.errorLastName = '';
		}

		if (this.state.email == ''){
			isValid = false;
			stateCache.errorEmail = string.NoEmail;
		} else if (!validator.isEmail(this.state.email)){
			isValid = false;
			stateCache.errorEmail = string.InvalidEmail;
		} else {
			stateCache.errorEmail = '';
		}

		if (this.state.password == '') {
			isValid = false;
			stateCache.errorPassword = string.NoPassword;
		} else if (!passwordChecker(this.state.password)){
			isValid = false;
			stateCache.errorPassword = string.InvalidPassword;
		} else {
			stateCache.errorPassword = '';
		}

		if (this.state.confirmPassword == '') {
			isValid = false;
			stateCache.errorConfirmPassword = string.NoConfirmPassword;
		} else if (this.state.password != this.state.confirmPassword){
			isValid = false;
			stateCache.errorConfirmPassword = string.InvalidConfirmPassword;
		} else {
			stateCache.errorConfirmPassword = '';
		}

		if (this.state.recaptcha == ''){
			isValid = false;
			stateCache.errorRecaptcha = string.InvalidRecaptcha;
		} else {
			stateCache.errorRecaptcha = '';
		}

		if(isValid){
			stateCache.recaptcha = this.state.recaptcha;
			this.props.setRememberLogin(!!this.state.rememberLogin);
			this.setState(stateCache,
				this.props.signupCall({
					firstname: this.state.firstName,
					lastname: this.state.lastName,
					usertype: 'student',
					email: this.state.email,
					password: this.state.password,
					confirmPassword: this.state.confirmPassword
					// TODO add language field here when the backend is ready for it
					// language: navigator.language,
				})
			);
		}else{
			this.setState(stateCache);
		}
	}

	render() {
		return (
			<div className="login-section">
				<Form>
					<FormGroup>
						<Input 
							type="text" 
							name="firstName" 
							value={this.state.firstName || ''}
							valid={this.state.errorFirstName == ''}
							onChange={this.onChange} 
							placeholder={string.FirstName} 
						/>
						<FormFeedback>{this.state.errorFirstName}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Input 
							type="text" 
							name="lastName" 
							value={this.state.lastName || ''} 
							valid={this.state.errorLastName == ''}
							onChange={this.onChange} 
							placeholder={string.LastName} 
						/>
						<FormFeedback>{this.state.errorLastName}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Input 
							type="text" 
							name="email" 
							value={this.state.email || ''} 
							valid={this.state.errorEmail == ''}
							onChange={this.onChange} 
							placeholder={string.Email} 
						/>
						<FormFeedback>{this.state.errorEmail}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Input 
							type="password" 
							name="password" 
							value={this.state.password || ''} 
							valid={this.state.errorPassword == ''}
							onChange={this.onChange} 
							placeholder={string.Password} 
						/>
						<FormFeedback>{this.state.errorPassword}</FormFeedback>
					</FormGroup>
					<FormGroup>
						<Input 
							type="password" 
							name="confirmPassword" 
							value={this.state.confirmPassword || ''} 
							valid={this.state.errorConfirmPassword == ''}
							onChange={this.onChange} 
							placeholder={string.ConfirmPassword} 
						/>
						<FormFeedback>{this.state.errorConfirmPassword}</FormFeedback>
					</FormGroup>
					<div className="recaptcha-wrapper">
						<div id="signup-recaptcha"></div>
						<FormFeedback>{this.state.errorRecaptcha}</FormFeedback>
					</div>
					<FormGroup check>
						<Input
							name={'rememberLogin'}
							type="checkbox" 
							checked={!!this.state.rememberLogin}
							onChange={this.onChange}
						/>
						{' ' + string.RememberLogin}
					</FormGroup>
					<FormFeedback>{this.props.ui.apiCallType == resourcePath.signup && this.props.ui.serverErrorMessage}</FormFeedback>
					<Button onClick={() => this.submit()}>{string.Signup}</Button>
				</Form>
			</div>
		);
	}
}

export default SignupSection;