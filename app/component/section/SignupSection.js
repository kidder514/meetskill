import React, { Component } from 'react';
import {Link} from "react-router";
import string from "../../String";
import config from "../../config"

class SignupSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			errorEmail: '',
			password: '',
			confirmPassword: '',
			errorPassword: ''
		};
		this.submit = this.submit.bind(this);
		this.tickRecaptcha = this.tickRecaptcha.bind(this);		
		this.onChange = this.onChange.bind(this);
	}

	componentDidUpdate(){
		if (this.props.userState.isLoggedin){
			this.props.hideDialog();			
		}
	}
	
	componentDidMount(){
		grecaptcha.render("signup-recaptcha", {
			'badge' : "bottomright",
			'sitekey' : config.recaptchaSiteKey,
			'callback' : this.tickRecaptcha,
			'data-size': "invisible"
		});
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});		
	}

	tickRecaptcha(token){
		console.log("here is the token")
		console.log(token);		
	}

	submit() {
		this.props.signupCall({
			firstname: this.state.firstName,
			lastname: this.state.lastName,
			usertype: "student",
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword
		});
	}

	render() {
		return (
			<div className="login-section">
				<div className="input-item">
					<input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder={string.FirstName} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder={string.LastName} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="text" name="email" value={this.state.email} onChange={this.onChange} placeholder={string.Email} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder={string.Password} />
					<span></span>
				</div>
				<div className="input-item">
					<input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.onChange} placeholder={string.ConfirmPassword} />
					<span></span>
				</div>
				<div className="recaptcha-wrapper">
						<div id="signup-recaptcha"></div>					
					</div>
				<div className="input-item">
					<input type="submit" onClick={this.submit} value={string.Signup} />
				</div>
			</div>
		)
	}
}

export default SignupSection;