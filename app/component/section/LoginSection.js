import React, { Component } from 'react';
import string from "../../String";
import config from "../../config"
import GoogleLogin from 'react-google-login';

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
		this.gLoginSuccess = this.gLoginSuccess.bind(this);
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

	submit() {
		var query = "";
		this.props.loginCall(query);
	}

	render() {
		return (
			<div className="login-section">
				<div className="input-item">
					<input type="text" name="email" placeholder={string.email} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="password" name="password" placeholder={string.Password} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="submit" onClick={this.submit} value="Submit" placeholder={string.Submit} />
					<span></span>
				</div>
				<hr />
				<div className="input-item">
					<GoogleLogin
						    clientId={config.googleLoginClientId}
						    buttonText={string.LoginWithGoogle}
						    onSuccess={this.gLoginSuccess}
						    onFailure={this.gLoginFail}
						/>
				</div>
				<div className="input-item">
					<button type="button">{string.LoginWithFacebook}</button>
				</div>
			</div>
		)
	}
}

export default LoginSection;