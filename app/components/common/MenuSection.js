import React, {Component} from 'react';
import {Link} from "react-router";

class MenuSection extends Component {

    render() {
	    return (

	        <div className="wrapper">
	        	<button className="clearfix">Sign up</button> <br />
	        	<button onClick={ () => this.props.showDialog("login")}>Log in</button> <br />
	        	<button onClick={ () => this.props.ShowErrorDialog("we found a error.")}>error</button>
	        </div>
	    )
    }
}

export default MenuSection;
