import React, {Component} from 'react';
import {Link} from "react-router";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, ListGroup, ListGroupItem } from 'reactstrap';
import LoadingSpinner from "../../../helper/uicomponent/LoadingSpinner"
import IconButton from "../../../helper/uicomponent/IconButton";
import SearchField from "../../../container/common/menu/SearchField"
import string from "../../../String"
import config from "../../../config"
import pagePath from "../../../pagePath"

class MobileMenuSection extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isMenuOpen: false,
            isSearchOpen: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleMenu(){
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    toggleSearch(){
        this.setState({isSearchOpen: !this.state.isSearchOpen});        
    }

    render() {
	    return (
	        <div className="menu-wrapper mobile-menu">       
                <div className={"mobile-opener " + (this.state.isMenuOpen ? "open" : "")} onClick={() => this.toggleMenu()}>
                    <IconButton icon="menu" />	
                </div>
                <div className="mobile-logo">
                    <Link to={pagePath.home}>
                        <img src={config.logoUrl} />
                    </Link>
                </div>
                <div className={"search-icon " + (this.state.isSearchOpen ? "open" : "")} onClick={() => this.toggleSearch()}>
                    <IconButton icon="search" />	
                </div>

                <div className={"mobile-search-wrapper " + (this.state.isSearchOpen ? "open" : "")}>
                    <SearchField />
                </div>
                <div className={"mobile-slider " + (this.state.isMenuOpen ? "open" : "")}>
                    mobile slider
                </div>
			</div>
		)
    }
}


export default MobileMenuSection;
