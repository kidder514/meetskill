import React, { Component } from 'react';
import string from "../../../String"
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

class AccountDeleteAccountPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			password:"",
			errorPassword:""
		}

		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);		
	}

	componentWillMount(){
		this.setState({password: ""});
	}

	componentWillUnmount(){
		this.setState({password: ""});		
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	submit(){
		if (this.state.password != ""){
			this.setState({errorPassword: ""});			
			this.props.deleteAccountCall({
				"current_password": this.state.password					
			}, {
				"x-user-id": this.props.userState.uid,
				"x-access-token": this.props.userState.token					
			})
		} else {
			this.setState({errorPassword: string.NoPassword});
		}
	}

    render(){
	    return (
	    	<div className="account-delete-page">
				<div className="account-page-header">
					<h1>{string.AccountDelete}</h1>
					<p>{string.AccountDeleteSubheading}</p>
				</div>
				<Form>
					<FormGroup>
						<Label for="password" >{string.Password}</Label>
							<Input 
								type="password" 
								name="password"
								value={this.state.password}
								onChange={this.onChange}
							/>
							<FormFeedback>{this.state.errorPassword}</FormFeedback>
					</FormGroup>
					<Button onClick={() => this.submit()}>{string.Delete}</Button>
				</Form>
	    	</div>
	    )
  	}
}

export default AccountDeleteAccountPage;