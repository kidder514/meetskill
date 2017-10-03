import React, {Component} from 'react';
import {Link} from "react-router";

class SideBarPage extends Component{

  	render(){
  		var loginPortal = "";
  		if ( !this.props.userState.isLoggedIn)
		{
			loginPortal = 
			<div>
				<p>Login or sign-up to order food</p>
				<div className="login-button">
				  	<Link to="/login" className="login ">
			    		<button className="btn btn-default btn-sm btn-block">
			    			login
				    	</button>
					</Link>	
				  	<Link to="/signup">
				    	<button className="btn btn-sm btn-default btn-block">
						  	Sign-up
				    	</button>
				  	</Link>
				</div>
			</div>;
		} 
  		return(
  			<div>
  				{loginPortal}
  				<h4>sidebar</h4>
  				<img src="http://placehold.it/350x150" />
  				<img src="http://placehold.it/350x450" />
        	</div>
  			);
    }
}

export default SideBarPage;
