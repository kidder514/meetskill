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
	Label,
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
			this.props.forgotPasswordCall({email: this.state.email});
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
					<FormGroup>
						<Label>{string.EnterEmailToRecoverPassword}</Label>
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
					</FormGroup>
					<FormGroup>
						<Button className="full-width-button" onClick={() => this.submit()}>{string.RecoverPassword}</Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default ForgotPasswordSection;