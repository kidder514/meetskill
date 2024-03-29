import React, {Component} from 'react';
import {Link} from 'react-router';
import string from '../../../String';
import pagePath from '../../../pagePath';
import LoadingSpinner from '../../../helper/uicomponent/LoadingSpinner';
import getInitial from '../../../helper/getInitial';

class ProfilePopOverSection extends Component {
	constructor(props) {
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}
    
	renderComponent(){
		return (
			<div className="profile-popover-container">
				<Link to={pagePath.Account}>
					<div className="profile-main clearfix">
						<div className="user-initials">
							{ getInitial(this.props.userState.firstName, this.props.userState.lastName) }
						</div>
						<div className="name-email">
							<div className="name-email-name">{this.props.userState.firstName + ' ' + this.props.userState.lastName}</div>
							<div className="name-email-email">{this.props.userState.email}</div>
						</div>
					</div>
				</Link>
				<div className="profile-menu">
					<ul className="first-section">
						<li>
							<Link to={pagePath.Profile}>
								{string.MyProfile}
							</Link>
						</li>
						<li>
							<Link to={pagePath.MyCart}>
								{string.MyCart}
							</Link>
						</li>
						<li>
							<Link to={pagePath.MyCourses}>
								{string.MyCourses}
							</Link>
						</li>
						<li>
							<Link to={pagePath.WishList}>
								{string.WishList}
							</Link>
						</li>
						<li >
							<Link to={pagePath.Inbox}>
								{string.Inbox}
							</Link>
						</li>
						<li>
							<Link to={pagePath.Notification}>
								{string.Notification}
							</Link>
						</li>
					</ul>
					<ul className="second-section">
						<li>
							<Link to={pagePath.Help}>
								{string.Help}
							</Link>
						</li>
						<li>
							<Link to={pagePath.Logout}>
								{string.LogOut}
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	render() {
		return (this.renderComponent());
	}
}

export default ProfilePopOverSection;
