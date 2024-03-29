import React, { Component } from 'react';
import NoPermissionPage from '../NoPermissionPage';

class AccountViewPublicProfilePage extends Component{
	constructor(props){
		super(props);
	}

	render(){
		if (this.props.userState.isLoggedin){
			return (
				<div className="account-profile-page">
					AccountViewPublicProfilePage
				</div>
			);
		} else {
			return (<NoPermissionPage />);
		}
	}
}

export default AccountViewPublicProfilePage;