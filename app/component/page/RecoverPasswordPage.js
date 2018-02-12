import React, { Component } from 'react';
import string from '../../String';
import passwordChecker from '../../helper/passwordChecker';
import { 
	Button, 
	Form, 
	FormGroup, 
	Input, 
	FormFeedback
} from 'reactstrap';

class RecoverPasswordPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			token: '',
			password: '',
			errorPassword: '',
			confirmPassword: '',
			errorConfirmPassword: '',
		};
		this.submit = this.submit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		if (this.props.location.search != ''){
			const query = this.props.location.query;
			this.setState({
				email: query.email,
				token: query.token
			});
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}


	submit() {
		var stateCache = {};
		var isValid = true;

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

		if(isValid){
			this.setState(stateCache,
				this.props.updatePasswordCall({
					email: this.state.email,
					token: this.state.token,
					newpassword: this.state.password
				})
			);
		}else{
			this.setState(stateCache);
		}
	}

	render(){
		return (
			<div className="reset-password-page small-container">
				<Form>
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
					<FormGroup className="text-center">
						<Button 
							className={'full-width-button'}
							onClick={() => this.submit()}
						>
							{string.Signup}
						</Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default RecoverPasswordPage;
