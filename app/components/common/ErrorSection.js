import React, { Component } from 'react';

class ErrorSection extends Component{
	constructor(props){
		super(props);
	}

    render(){
	    return (
	    	<div>
	    		<h1>Error</h1>
	    		{ this.props.errorMessage}
	    	</div>
	    )
  	}
}

export default ErrorSection;