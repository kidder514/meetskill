import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router';
import string from '../../String';
import pagePath from '../../pagePath';
import getInitial from '../../helper/getInitial';
import NoPermissionPage from './NoPermissionPage';

class AccountPage extends Component{
	constructor(props){
		super(props);

		this.renderPhoto = this.renderPhoto.bind(this);
	}

	renderPhoto(){
		var user = this.props.userState;
		if (user.photo != null){
			return <img 
				className="user-photo img-circle" 
				src={user.photo} 
				alt={getInitial(this.props.userState.firstName, this.props.userState.lastName)} 
			/>;
		} else {
			return <div className="user-initials">{getInitial(this.props.userState.firstName, this.props.userState.lastName)}</div>;
		}
	}

	render(){
		var user = this.props.userState;
		if (user.isLoggedin) {
			return (
				<div className="account-page">
					<Container>
						<Row>
							<Col xs="12" sm="3">
								<div className="multi-col-menu">
									<div className="profile-header">
										{this.renderPhoto()}
										<div className="name">{user.firstName + ' ' + user.lastName}</div>
									</div>
									<ul className="side-menu">
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.Account + pagePath.ViewPublicProfile}>{string.AccountViewPublicProfile}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.Account + pagePath.Profile}>{string.AccountProfile}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.Account + pagePath.Photo}>{string.AccountPhoto}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.Account + pagePath.Account}>{string.AccountAccount}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.Account + pagePath.Setting}>{string.AccountSetting}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.Account + pagePath.DeleteAccount}>{string.AccountDeleteAccount}</Link>
										</li>
									</ul>
								</div>
							</Col>
							<Col xs="12" sm="9">
								{this.props.children}
							</Col>
						</Row>
					</Container>
				</div>
			);
		} else {
			return (<NoPermissionPage />);
		}
	}
}

export default AccountPage;