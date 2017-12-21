import React, { Component } from 'react';
import {Link} from 'react-router';
import { 
	Button, 
	Form, 
	FormGroup, 
	Input, 
	FormFeedback
} from 'reactstrap';
import string from '../../String';
import config from '../../config';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import validator from 'validator';
import resourcePath from '../../resourcePath';

class LoginSection extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			email: '',
			errorEmail: '',
			password: '',
			errorPassword: '',
			recaptcha:'',
			errorRecaptcha: '',
			rememberLogin: ''
		};

		this.state = this.initialState;
		this.submit = this.submit.bind(this);
		this.gotoSignup = this.gotoSignup.bind(this);
        
		this.tickRecaptcha = this.tickRecaptcha.bind(this);
		this.recaptchaExpired = this.recaptchaExpired.bind(this);       
		this.onChange = this.onChange.bind(this);       
		this.gLoginSuccess = this.gLoginSuccess.bind(this);
		this.fbButtonClicked = this.fbButtonClicked.bind(this);
		this.responseFb = this.responseFb.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});                   
	}

	componentDidMount(){
		this.props.resetAllServerError();
		window.grecaptcha.render('login-recaptcha', {
			'badge' : 'bottomright',
			'sitekey' : config.recaptchaSiteKey,
			'callback' : this.tickRecaptcha,
			'data-size': 'invisible',
			'expired-callback': this.recaptchaExpired,
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

	gotoSignup(){
		this.props.showDialog('signup');
		this.setState(this.initialState);
	}

	gLoginSuccess(googleUser){
		if (googleUser !== undefined && googleUser.getAuthResponse().id_token !== ''){
			this.props.googleLoginCall({'id_token': googleUser.getAuthResponse().id_token});
		}
	}
    
	gLoginFail(){

		// handle google login fail 
	}

	fbButtonClicked(){

	}

	responseFb(res){
		if (res.accessToken){
			this.props.facebookLoginCall({'access_token': res.accessToken});
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
		if(this.state.email == ''){
			stateCache.errorEmail = string.NoEmail;
			isValid = false;        
		} else if(!validator.isEmail(this.state.email)){
			stateCache.errorEmail = string.InvalidEmail;
			isValid = false;        
		}else{
			stateCache.errorEmail = '';
		}

		if(this.state.password == ''){
			stateCache.errorPassword = string.NoPassword;
			isValid = false;        
		}else{
			stateCache.errorPassword = '';
		}

		if(this.state.recaptcha == ''){
			stateCache.errorRecaptcha = string.InvalidRecaptcha;
			isValid = false;        
		}else{
			stateCache.errorRecaptcha = '';
		}

		stateCache.rememberLogin = this.state.rememberLogin;

		if(isValid){
			stateCache.recaptcha = this.state.recaptcha;
			this.setState(stateCache,
				this.props.loginCall({'email': this.state.email, 'password': this.state.password})
			);
		}else{
			this.setState(stateCache);
		}
	}
    
	render() {
		var {ui, userState} = this.props;       
		if(userState.isLoggedIn){
			return (<div className="login-section">{string.YouAreAlreadyLoggedIn}</div>);
		}else{
			return (
				<div className="login-section">
					<Form>
						<FormGroup>
							<Input 
								type="text" 
								name="email" 
								value={this.state.email || ''}
								valid={this.state.erroEmail == ''}
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
						<div className="recaptcha-wrapper">
							<div id="login-recaptcha"></div>
							<FormFeedback>{this.state.errorRecaptcha}</FormFeedback>
						</div>
						<FormFeedback>{ui.serverErrorType == resourcePath.login && ui.serverErrorMessage}</FormFeedback>                    
						<Button id="login-submit" onClick={() => this.submit()}>{string.Login}</Button>
						<Link className="forgot-password-link" onClick={() => this.props.showDialog('forgotPassword')}>{string.ForgotPassword}</Link>
						<hr />
						<Button onClick={() => this.gotoSignup()}>{string.Signup}</Button>
					</Form>
					<div className="input-item">
						<span>{ui.serverErrorType == resourcePath.googleLogin && ui.serverErrorMessage}</span>
						<GoogleLogin
							clientId={config.googleLoginClientId}
							buttonText={string.LoginWithGoogle}
							onSuccess={this.gLoginSuccess}
							onFailure={this.gLoginFail}
						/>\
					</div>
					<div className="input-item">
						<span>{ui.serverErrorType == resourcePath.facebookLogin && ui.serverErrorMessage}</span>
						<FacebookLogin
							appId={config.FBAppId}
							autoLoad={false}
							fields="name,email,picture"
							onClick={this.fbButtonClicked}
							callback={this.responseFb} />
					</div>
				</div>
			);
		}
	}
}

export default LoginSection;