import React, {Component} from 'react';
import {Link} from "react-router";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import LoadingSpinner from "../../../helpers/uicomponent/LoadingSpinner"
import IconButton from "../../../helpers/uicomponent/IconButton";
import SearchField from "../../../containers/common/menu/SearchField"
import strings from "../../../Strings"
import CategoryPopOver from "../../../containers/common/menu/CategoryPopOver"
import config from "../../../config"

class MenuSection extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			popoverOpen: false
		};
	}

	componentDidMount() {
		if(this.props.categories.length <= 0 ){
			this.props.loadCategories();
		}
	}
	
	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	renderUserSection(){
		if (this.props.userState.isLoggedIn){
			return ([
				<Link key="play_video" to={"/mycourses"}>
			        <IconButton className="menu-item" icon="play_circle_outline" />			
				</Link>,
				<Link key="notification" to={"/notification"}>
			        <IconButton className="menu-item" icon="notifications_none" />
				</Link>,
				<Link to={"/account"} key="profile_icon" className="menu-item profile-icon">
					<img className="img-circle" src={"http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png"} />				
				</Link>
	        	])
		} else{
			return (
				<Button className="menu-item" onClick={ () => this.props.showDialog("login")}>{strings.MenuLoginSignup}</Button>
			)
		}
	}

    render() {
	    return (
	        <div className="menu-wrapper">
	        	<Link to={"/"}className="menu-item logo-wrapper">
					<img src={config.logoUrl} />
	        	</Link>

		        <Button className="menu-item" id="Popover1" onClick={this.toggle}>
		        	{strings.MenuCategories}
		        </Button>
		        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
		        	<PopoverBody>
		        		<CategoryPopOver />
		        	</PopoverBody>
		        </Popover>

		        <SearchField className="menu-item"/>
				<Link to={"/instructorDashboard"}>
		        	<Button className="menu-item">
		        		{strings.MenuBeAnInstructor}
		        	</Button>
				</Link>
				
				<Link to={"/shoppingcart"}>
					<IconButton className="menu-item" icon="shopping_cart" />
				</Link>
		        {this.renderUserSection()}
	        </div>
	    )
    }
}

export default MenuSection;
