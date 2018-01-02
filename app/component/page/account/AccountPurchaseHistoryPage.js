import React, { Component } from 'react';
import NoPermissionPage from '../NoPermissionPage';

class AccountPurchaseHistoryPage extends Component{
	constructor(props){
		super(props);
	}


	render(){
		if (this.props.userState.isLoggedin){
			return (
				<div className="purchase-history-page">
					AccountPurchaseHistoryPage
				</div>
			);
		} else {
			return (<NoPermissionPage />);
		}

	}
}

export default AccountPurchaseHistoryPage;