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
			widgetId:'',
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
		this.resetRecaptcha = this.resetRecaptcha.bind(this);
		this.onChange = this.onChange.bind(this);       
		this.gLoginSuccess = this.gLoginSuccess.bind(this);
		this.fbButtonClicked = this.fbButtonClicked.bind(this);
		this.responseFb = this.responseFb.bind(this);
	}

	onChange(e){
		if ( e.target.name == 'rememberLogin') {
			this.setState({[e.target.name]: (e.target.checked ? 1 : 0)});
		} else {
			this.setState({[e.target.name]: e.target.value});                   
		}
	}

	componentDidMount(){
		this.props.resetAllServerError();
		var id = window.grecaptcha.render('login-recaptcha', {
			'badge' : 'bottomright',
			'sitekey' : config.recaptchaSiteKey,
			'callback' : this.tickRecaptcha,
			'data-size': 'invisible',
			'expired-callback': this.recaptchaExpired,
		});
		this.setState({widgetId: id});
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

	resetRecaptcha() {
		window.grecaptcha.reset(this.state.widgetId);
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
			this.props.setRememberLogin(!!this.state.rememberLogin);
			this.setState(stateCache,
				this.props.loginCall({'email': this.state.email, 'password': this.state.password})
			);
		}else{
			this.setState(stateCache);
		}

		this.resetRecaptcha();		
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
						<FormGroup>
							<div className="recaptcha-wrapper">
								<div id="login-recaptcha"></div>
								<FormFeedback>{this.state.errorRecaptcha}</FormFeedback>
							</div>
						</FormGroup>						
						<FormFeedback>{ui.apiCallType == resourcePath.login && ui.serverErrorMessage}</FormFeedback>                    
						<FormGroup check className="text-center">
							<Input
								name={'rememberLogin'}
								type="checkbox" 
								checked={!!this.state.rememberLogin}
								onChange={this.onChange}
							/>
							{' ' + string.RememberLogin}
						</FormGroup>
						<FormGroup className="text-center">
							<Button className="full-width-button" onClick={() => this.submit()}>{string.Login}</Button>
							<Link className="forgot-password-link" onClick={() => this.props.showDialog('forgotPassword')}>{string.ForgotPassword}</Link>	
						</FormGroup>
						<FormGroup>
							<Button className="full-width-button" onClick={() => this.gotoSignup()}>{string.Signup}</Button>
						</FormGroup>
						<FormGroup className="google-login">
							<span>{ui.apiCallType == resourcePath.googleLogin && ui.serverErrorMessage}</span>
							<GoogleLogin
								className="full-width-button"
								clientId={config.googleLoginClientId}
								buttonText={string.LoginWithGoogle}
								onSuccess={this.gLoginSuccess}
								onFailure={this.gLoginFail}
							/>
						</FormGroup>
						<FormGroup className="facebook-login">
							<span>{ui.apiCallType == resourcePath.facebookLogin && ui.serverErrorMessage}</span>
							<FacebookLogin
								className="full-width-button"
								appId={config.FBAppId}
								autoLoad={false}
								fields="name,email,picture"
								onClick={this.fbButtonClicked}
								textButton={string.LoginWithFacebook}
								callback={this.responseFb} 
							/>
								
						</FormGroup>

					</Form>


				</div>
			);
		}
	}
}

export default LoginSection;