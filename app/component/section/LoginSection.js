import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";
import config from "../../config"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class LoginSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			errorEmail: '',
			password: '',
			errorPassword: ''
		};
		this.submit = this.submit.bind(this);
		this.tickRecaptcha = this.tickRecaptcha.bind(this);
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
			'data-size': "invisible"
		});
	}

	componentDidUpdate(){
		if (this.props.userState.isLoggedin){
			this.props.hideDialog();			
		}
	}

	gLoginSuccess(googleUser){
		if (googleUser !== undefined && googleUser.getAuthResponse().id_token !== ""){
			console.log(googleUser);
			console.log(googleUser.getAuthResponse());
			// this.props.gValidationCall(googleUser.getAuthResponse().id_token);
			// this.props.login(googleUser.getAuthResponse().id_token, this.state.rememberLogin);
		}
	}
	
	gLoginFail(){
		// login fail
	}

	gSignout(){
	    var auth2 = gapi.auth2.getAuthInstance();
	    auth2.signOut().then(function () {
	    	// google signout callback
	    });
	}
	
	fbButtonClicked(){
		console.log("fb button cliced");
	}

	responseFb(){
		console.log("responseFb");
	}

	tickRecaptcha(token){
		console.log("here is the token")
		console.log(token);		
	}

	submit(token) {
		this.props.loginCall({
			email: this.state.email,
			password: this.state.password
		});
	}
	
	render() {
		if(this.props.userState.isLoggedIn){
			return (<div className="login-section">{string.YouAreAlreadyLoggedIn}</div>)
		}else{
			return (
				<div className="login-section">
					<div className="input-item">
						<input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder={string.Email} />
						<span></span>
					</div>
					<div className="input-item">
						<input type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder={string.Password} />
						<span></span>
					</div>
					<div className="recaptcha-wrapper">
						<div id="login-recaptcha"></div>					
					</div>
					<div className="input-item">
						<input id="login-submit" type="submit" onClick={this.submit} value={string.Login} />
						<Link onClick={() => this.props.showDialog("forgotPassword")}>{string.ForgotPassword}</Link>
					</div>
					<hr />
					<div className="input-item">
						<input onClick={() => this.props.showDialog("signup")} type="submit" value={string.Signup} />
					</div>
					<div className="input-item">
						<GoogleLogin
								clientId={config.googleLoginClientId}
								buttonText={string.LoginWithGoogle}
								onSuccess={this.gLoginSuccess}
								onFailure={this.gLoginFail}
							/>
					</div>
					<div className="input-item">
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