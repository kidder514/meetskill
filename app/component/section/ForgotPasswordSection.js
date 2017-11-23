import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";

class ForgotPasswordSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.submit = this.submit.bind(this);
		
	}

	submit() {
		var query = "";

	}

	render() {
		return (
			<div className="login-section">
				<div className="input-item">
					<input type="text" name="email" placeholder={string.Email} />
					<span></span>
					<span>{string.EnterEmailToResetPassword}</span>
				</div>
				<div className="input-item">
					<input type="submit" onClick={this.submit} value={string.ResetPassword} />
				</div>
			</div>
		)
	}
}

export default ForgotPasswordSection;