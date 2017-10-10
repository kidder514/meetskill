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

		this.toggle = this.toggle.bind(this);

		this.state = {
			isCategoryPOOpen: false,
			isInstructorPOOpen: false,
			isCartPOOpen: false,
			isMyCoursesPOOpen: false,
			isNotificationPOOpen: false,
			isAccountPOOpen: false
		};
	}

	componentDidMount() {
		if(this.props.categories.length <= 0 ){
			this.props.loadCategories();
		}
	}
	
	toggle(popOver) {
		switch (popOver) {
			case "category":
				this.setState({isCategoryPOOpen: !this.state.isCategoryPOOpen});
			break;
			case "instructor":
				this.setState({isInstructorPOOpen: !this.state.isInstructorPOOpen});
			break;
			case "cart":
				this.setState({isCartPOOpen: !this.state.isCartPOOpen});
			break;
			case "mycourses":
				this.setState({isMyCoursesPOOpen: !this.state.isMyCoursesPOOpen});
			break;
			case "notification":
				this.setState({isNotificationPOOpen: !this.state.isNotificationPOOpen});
			break;
			case "account":
				this.setState({isAccountPOOpen: !this.state.isAccountPOOpen});
			break;
		}
	}

	renderUserSection(){
		if (this.props.userState.isLoggedIn){
			return ([
				<Link key="play_video" to={pagePath.mycourses}>
			        <IconButton className="menu-item" icon="play_circle_outline" />			
				</Link>,
				<Link key="notification" to={pagePath.notification}>
			        <IconButton className="menu-item" icon="notifications_none" />
				</Link>,
				<Link to={pagePath.account} key="profile_icon" className="menu-item profile-icon">
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
	        	<Link to={pagePath.home}className="menu-item logo-wrapper">
					<img src={config.logoUrl} />
	        	</Link>

		        <Button 
					className="menu-item" 
					id="categoryPopOver" 
					onMouseEnter={() => this.toggle("category")} 
					onMouseOut={() => this.toggle("category")} 
				>
		        	{strings.MenuCategories}
		        </Button>
		        <Popover placement="bottom" isOpen={this.state.isCategoryPOOpen} target="categoryPopOver" toggle={this.toggle}>
		        	<PopoverBody>
		        		<CategoryPopOver />
		        	</PopoverBody>
		        </Popover>

		        <SearchField className="menu-item"/>
				<Link to={pagePath.instructorDashboard}>
		        	<Button className="menu-item">
		        		{strings.MenuBeAnInstructor}
		        	</Button>
				</Link>
				
				<Link to={pagePath.shoppingcart}>
					<IconButton className="menu-item" icon="shopping_cart" />
				</Link>
		        {this.renderUserSection()}
	        </div>
	    )
    }
}

export default MenuSection;
