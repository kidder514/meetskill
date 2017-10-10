import React, {Component} from 'react';
import {Link} from "react-router";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import LoadingSpinner from "../../../helpers/uicomponent/LoadingSpinner"
import IconButton from "../../../helpers/uicomponent/IconButton";
import SearchField from "../../../containers/common/menu/SearchField"
import strings from "../../../Strings"
import CategoryPopOver from "../../../containers/common/menu/CategoryPopOver"
import config from "../../../config"
import pagePath from "../../../pagePath"

class MenuSection extends Component {
	constructor(props) {
		super(props);
		this.downArrow = "";
		this.upArrow = "";
		this.state = {
			
		};
	}

	componentDidMount() {
		if(this.props.categories.length <= 0 ){
			this.props.loadCategories();
		}
	}
	
	renderUserSection(){
		if (this.props.userState.isLoggedIn){
			return (
				<Link to={pagePath.account} key="profile_icon" className="menu-item profile-icon">
					<img className="img-circle" src={"http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png"} />				
				</Link>
	        	)
		} else{
			return (
				<a className="menu-item login-button" onClick={ () => this.props.showDialog("login")}>{strings.MenuLoginSignup}</a>
			)
		}
	}

    render() {
	    return (
	        <div className="menu-wrapper">
	        	<Link to={pagePath.home} className="menu-item logo-wrapper">
					<img src={config.logoUrl} />
	        	</Link>

		        <a className="menu-item" >
		        	<span>{strings.MenuCategories + " " + this.downArrow }</span>
		        </a>
				<CategoryPopOver />

		        <SearchField className="menu-item"/>
				<Link className="menu-item" to={pagePath.instructordashboard}>
		        		<span>{strings.MenuBeAnInstructor}</span>
				</Link>
				
				<Link className="menu-item cart-icon" to={pagePath.shoppingcart}>
					<IconButton icon="shopping_cart" />
				</Link>
				{this.renderUserSection()}
	        </div>
	    )
    }
}

export default MenuSection;
