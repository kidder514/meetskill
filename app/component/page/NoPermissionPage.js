import React, { Component } from 'react';
import string from '../../String';

class NoPermissionPage extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="no-permission-page">
				{ string.NoPermissionPage }
			</div>
		);
	}
}

export default NoPermissionPage;