import React, {Component} from 'react';
import {Link} from "react-router";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import LoadingSpinner from "../../../helpers/uicomponent/LoadingSpinner"
import IconButton from "../../../helpers/uicomponent/IconButton";
import Search from "../../../containers/common/menu/Search"
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

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	renderUserSection(){
		if (this.props.userState.isLoggedIn){
			return ([
			        <IconButton className="menu-item" icon="play_circle_outline" />,
			        <IconButton className="menu-item" icon="notifications_none" />,
		        	<div className="menu-item profile-icon">
		        		<img className="img-circle" src={config.logoUrl} />
		        	</div>
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
	        	<div className="menu-item logo-wrapper">
					<Link to={"/"} >
	        			<img src="https://i.pinimg.com/236x/74/f9/d1/74f9d1fbb45e1fb89a9f069f7e161ae2.jpg" />
					</Link>
	        	</div>

		        <Button className="menu-item" id="Popover1" onClick={this.toggle}>
		        	{strings.MenuCategories}
		        </Button>
		        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
		        	<PopoverBody>
		        		<CategoryPopOver />
		        	</PopoverBody>
		        </Popover>

		        <Search className="menu-item"/>
		        <Button className="menu-item">
		        	{strings.MenuBeAnInstructor}
		        </Button>
		        <IconButton className="menu-item" icon="shopping_cart" />

		        {this.renderUserSection()}
	        </div>
	    )
    }
}

export default MenuSection;
