import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";
import config from "../../config"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import validator from "validator"

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
		grecaptcha.render("login-recaptcha", {
			'badge' : "bottomright",
			'sitekey' : config.recaptchaSiteKey,
			'callback' : this.tickRecaptcha,
			'data-size': "invisible",
			'expired-callback': this.recaptchaExpired,
		});
	}

	componentWillReceiveProps(nextProps){
		if (this.props.ui.showDialogBox && (!nextProps.ui.showDialogBox)){
			this.props.resetAllServerError();			
			this.setState(this.initialState);
		}
	}

	gotoSignup(){
		this.props.showDialog("signup");
		this.setState(this.initialState);
	}

	gLoginSuccess(googleUser){
		if (googleUser !== undefined && googleUser.getAuthResponse().id_token !== ""){
			this.props.googleLoginCall({'id_token': googleUser.getAuthResponse().id_token});
		}
	}
	
	gLoginFail(){

		// handle google login fail	
	}

	fbButtonClicked(e){

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
		this.setState({recaptcha: ''})
	}

	submit(token) {
		var stateCache = {};
		var isValid = true;
		if(this.state.email == ""){
			stateCache.errorEmail = string.NoEmail;
			var isValid = false;		
		} else if(!validator.isEmail(this.state.email)){
			stateCache.errorEmail = string.InvalidEmail;
			var isValid = false;		
		}else{
			stateCache.errorEmail = "";
		}

		if(this.state.password == ""){
			stateCache.errorPassword = string.NoPassword;
			var isValid = false;		
		}else{
			stateCache.errorPassword = "";
		}

		if(this.state.recaptcha == ""){
			stateCache.errorRecaptcha = string.InvalidRecaptcha;
			var isValid = false;		
		}else{
			stateCache.errorRecaptcha = "";
		}

		stateCache.rememberLogin = this.state.rememberLogin;

		if(isValid){
			stateCache.recaptcha = this.state.recaptcha;
			this.setState(stateCache,
				this.props.loginCall({"email": this.state.email, "password": this.state.password})
			);
		}else{
			this.setState(stateCache);
		}
	}
	
	render() {
		if(this.props.userState.isLoggedIn){
			return (<div className="login-section">{string.YouAreAlreadyLoggedIn}</div>)
		}else{
			return (
				<div className="login-section">
					<div className="input-item">
						<input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder={string.Email} />
						<span>{this.state.errorEmail}</span>
					</div>
					<div className="input-item">
						<input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder={string.Password} />
						<span>{this.state.errorPassword}</span>
					</div>
					<div className="recaptcha-wrapper">
						<div id="login-recaptcha"></div>
						<span>{this.state.errorRecaptcha}</span>											
					</div>
					<div className="input-item">
						<span>{this.props.ui.serverLoginError}</span>
						<input id="login-submit" type="submit" onClick={this.submit} value={string.Login} />
						<Link className="forgot-password-link" onClick={() => this.props.showDialog("forgotPassword")}>{string.ForgotPassword}</Link>
					</div>
					<hr />
					<div className="input-item">
						<input onClick={this.gotoSignup} type="submit" value={string.Signup} />
					</div>
					<div className="input-item">
						<span>{this.props.ui.serverGoogleLoginError}</span>
						<GoogleLogin
								clientId={config.googleLoginClientId}
								buttonText={string.LoginWithGoogle}
								onSuccess={this.gLoginSuccess}
								onFailure={this.gLoginFail}
							/>
					</div>
					<div className="input-item">
					<span>{this.props.ui.serverFacebookLoginError}</span>
						<FacebookLogin
							appId={config.FBAppId}
							autoLoad={false}
							fields="name,email,picture"
							onClick={this.fbButtonClicked}
							callback={this.responseFb} />
					</div>
				</div>
			)
		}
	}
}

export default LoginSection;