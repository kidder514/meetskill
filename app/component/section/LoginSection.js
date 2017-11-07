import React, {Component} from 'react';
import string from "../../String";

class LoginSection extends Component{
	constructor(props){
		super(props);
		this.state = {
			email : '',
			errorEmail: '',
			password: '',
			errorPassword: ''
		};
		this.submit = this.submit.bind(this);		
	}

	submit(){
		var query = "";
		this.props.loginCall(query);
	}

    render(){
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
					<button type="button">{string.LoginWithGoogle}</button>
				</div>
				<div className="input-item">
					<button type="button">{string.LoginWithFacebook}</button>
				</div>
	    	</div>
	    )
  	}
}

export default LoginSection;