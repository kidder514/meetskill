import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";
import config from "../../config"

class SignupSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			errorEmail: '',
			password: '',
			errorPassword: ''
		};
		this.submit = this.submit.bind(this);
		
	}

	submit() {
		var query = "";
		this.props.signupCall(query);
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
					<input type="password" name="password" placeholder={string.ConfirmPassword} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="submit" onClick={this.submit} value={string.Signup} />
				</div>
			</div>
		)
	}
}

export default SignupSection;