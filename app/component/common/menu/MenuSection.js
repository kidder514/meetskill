import React, {Component} from 'react';
import {Link} from "react-router";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import LoadingSpinner from "../../../helper/uicomponent/LoadingSpinner"
import IconButton from "../../../helper/uicomponent/IconButton";
import SearchField from "../../../container/common/menu/SearchField"
import string from "../../../String"
import CategoryPopOver from "../../../container/common/menu/CategoryPopOver"
import CartItemPopOver from "../../../container/common/menu/CartItemPopOver"
import ProfilePopOver from "../../../container/common/menu/ProfilePopOver"
import config from "../../../config"
import pagePath from "../../../pagePath"

class MenuSection extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	
	renderUserSection(){
		if (this.props.userState.isLoggedIn){
			return (
				<div className="menu-item no-hover-effect">
					<Link to={pagePath.Account} className="profile-icon">
						<img className="img-circle" src={"http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png"} />				
					</Link>
					<div className="popover">
						<ProfilePopOver />
					</div>
				</div>

	        	)
		} else{
			return (
				<a className="menu-item login-button" onClick={ () => this.props.showDialog("login")}>{string.MenuLoginSignup}</a>
			)
		}
	}

    render() {
	    return (
	        <div className="menu-wrapper desktop-menu">
	        	<Link to={pagePath.Home} className="menu-item logo-wrapper">
					<img src={config.logoUrl} />
	        	</Link>

		        <div className="menu-item" >
		        	<a>{string.MenuCategory}</a>
					<div className="category-pop-over popover">
						<CategoryPopOver />
					</div>
		        </div>

		        <SearchField className="menu-item no-hover-effect "/>
				<Link className="menu-item instructor-link" to={pagePath.InstructorDashboard}>
		        		<span>{string.MenuBeAnInstructor}</span>
				</Link>
				
				<div className="menu-item cart-icon">
					<Link to={pagePath.ShoppingCart}>
						<IconButton icon="shopping_cart" />
					</Link>
					<div className="popover">
						<CartItemPopOver />
					</div>
				</div>
				{this.renderUserSection()}
			</div>
		)
    }
}

export default MenuSection;
