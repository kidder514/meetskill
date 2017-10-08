import React, {Component} from 'react';

class MenuSection extends Component {

  	render(){
	    return (
	        <div className="wrapper">
	        	<button>Sign up</button> <br />
	        	<button onClick={ () => this.props.showDialog("login")}>Log in</button> <br />
	        	<button onClick={ () => this.props.ShowErrorDialog("we found a error.")}>error</button>
	        </div>
	    )
  	}
}

export default MenuSection;
