import React, { Component } from 'react';
import string from '../../String';
import validator from 'validator';
import resourcePath from '../../resourcePath';
import { 
	Button, 
	Form, 
	FormGroup, 
	Input, 
	FormText, 
	FormFeedback
} from 'reactstrap';

class ForgotPasswordSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			errorEmail: ''
		};
		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentDidMount(){
		this.props.resetAllServerError();
	}

	componentWillUnmount(){
		this.props.resetAllServerError();       
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});                   
	}

	submit() {
		this.props.resetAllServerError();
		if(validator.isEmail(this.state.email)){
			this.props.recoverPasswordCall({email: this.state.email});
		} else if (this.state.email == ''){ 
			this.setState({errorEmail: string.NoEmail});            
		} else {    
			this.setState({errorEmail: string.InvalidEmail});           
		}
	}

	render() {
		var ui = this.props.ui;
		return (
			<div className="login-section">
				<Form>
					<FormText>{string.EnterEmailToResetPassword}</FormText>
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
						<FormFeedback>{ui.apiCallType == resourcePath.recoverPassword && ui.serverErrorMessage}</FormFeedback>
						<FormText>{ui.serverSuccessType == resourcePath.recoverPassword && ui.serverSuccessMessage}</FormText>                  
						<Button onClick={() => this.submit()}>{string.ResetPassword}</Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default ForgotPasswordSection;