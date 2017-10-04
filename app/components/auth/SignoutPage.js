import React, {Component} from 'react';
import validator from "Validator";
import { browserHistory } from "react-router"

class SignoutPage extends Component {
	constructor(props){
		super(props);

		this.message = "";
	}

  	render(){
		if (this.props.userState.isLoggedIn)
		{
			this.message = "You have already logged out";
			this.props.signout();
		}else{
			this.message = "You are not logged in yet";
		}

	    return (
	    	<div>
	    		{this.message}
	    	</div>
	    )
  	}
}

export default SignoutPage;