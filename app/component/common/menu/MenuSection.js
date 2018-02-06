import React, {Component} from 'react';
import {Link} from 'react-router';
import IconButton from '../../../helper/uicomponent/IconButton';
import SearchField from '../../../container/common/menu/SearchField';
import string from '../../../String';
import CategoryPopOver from '../../../container/common/menu/CategoryPopOver';
import CartItemPopOver from '../../../container/common/menu/CartItemPopOver';
import ProfilePopOver from '../../../container/common/menu/ProfilePopOver';
import config from '../../../config';
import pagePath from '../../../pagePath';
import getInitial from '../../../helper/getInitial';

class MenuSection extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
    
	renderUserSection(){
		const user = this.props.userState;
		if ((user.isLoggedin)){
			return ([
				<div key="wishlist" className="menu-item wish-list">
					<Link to={pagePath.WishList}>
						<IconButton className="icon-button" icon="favorite_border" />
					</Link>
				</div>,
				<div key="notification" className="menu-item notification">
					<Link to={pagePath.Notification}>
						<IconButton className="icon-button" icon="notifications_none" />
					</Link>
				</div>,
				<div key="profile" className="menu-item no-hover-effect">
					<Link to={pagePath.Account} className="profile-icon">
						{(user.photo) ? <img className="img-circle" src={user.photo} /> : <div className="user-initials">{ getInitial(user.firstName, user.lastName) }</div>}               
					</Link>
					<div className="profile-popover popover">
						<ProfilePopOver />
					</div>
				</div>
			]);
		} else{
			return (
				<a className="menu-item login-button" onClick={ () => this.props.showDialog('login')}>{string.MenuLoginSignup}</a>
			);
		}
	}

	render() {
		const user = this.props.userState;
		const instructorString = (user.isLoggedin && !!user.isInstructor) ? string.MenuInstructor : string.MenuBeAnInstructor;
		return (
			<div className="menu-wrapper desktop-menu">
				<Link to={pagePath.Home} className="menu-item logo-wrapper">
					<img src={config.logoUrl} />
				</Link>
				<div className="menu-item menu-item-category" >
					<Link className="" to={pagePath.Categories}>
						{string.MenuCategories}
						<IconButton className="expand-more" icon="expand_more" />						
					</Link>
					<div className="category-pop-over popover">
						<CategoryPopOver />
					</div>
				</div>
				<SearchField className="menu-item no-hover-effect "/>
				<Link className="menu-item instructor-link" to={pagePath.InstructorDashboard}>
					<span>{instructorString}</span>
				</Link>
				<Link className="menu-item my-course" to={pagePath.MyCourses}>
					<span>{string.MyCourses}</span>
				</Link>
				<div className="menu-item">
					<Link to={pagePath.ShoppingCart}>
						<IconButton className="icon-button" icon="shopping_cart" />
					</Link>
					<div className="shopping-cart-pop-over popover">
						<CartItemPopOver />
					</div>
				</div>
				{this.renderUserSection()}
			</div>
		);
	}
}

export default MenuSection;
