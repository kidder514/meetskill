import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helper/uicomponent/IconButton";
import SearchField from "../../../container/common/menu/SearchField"
import string from "../../../String"
import config from "../../../config"
import pagePath from "../../../pagePath"
import getInitial from "../../../helper/getInitial"

class MobileMenuSection extends Component {
	constructor(props) {
		super(props);
        this.state = {
            isMenuOpen: false,
            isSearchOpen: false,
        };
        this.layerCount = 0;
        
        
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.slide = this.slide.bind(this);
        this.return = this.return.bind(this);        
        this.renderCategory = this.renderCategory.bind(this);
    }

    toggleMenu(){
        this.layerCount = 0;
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }
    toggleSearch(){
        this.setState({isSearchOpen: !this.state.isSearchOpen});        
    }

    slide(category){
        
    }

    return (){
        
    }

    renderCategory(category){
        if (this.layerCount == 0 && this.state.isMenuOpen) {
            this.layerCount++;
            return (
                <ul>
                    <li className="">
                        <Link>
                            {string.MenuCategory}
                            <span className="pull-right">></span>
                        </Link>
                        { this.renderCategory(this.props.category) }
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="subcategory">
                    {category.map((subcategory, index) => {
                        if( !!subcategory.subcategory ){
                            return (
                                <li key={"key-" + this.layerCount + "-" + index}>
                                    <Link>
                                        {subcategory.name}
                                        <span className="pull-right">></span>                            
                                    </Link>
                                    { this.renderCategory(subcategory.subcategory) }
                                </li>
                            );
                        } else {
                            return (
                                <li key={"key-" + this.layerCount + "-" + index}>
                                    <Link to={subcategory.path}>{subcategory.name}</Link>
                                </li>
                            );
                        }

                    })}
                </ul>
            )
        }

    }

    renderMenuItem(){
        return ([
            <div key="mobile-account-section" className="mobile-account-section">
                <Link to={pagePath.Account}>
                    { getInitial(this.props.userState.firstName, this.props.userState.lastName) }
                </Link> 
            </div>,
            <hr></hr>,
            <div key="mobile-category" className="mobile-category">
                { this.renderCategory(this.props.category) }
            </div>,
            <hr></hr>,            
            <div key="mobile-menu-section" className="mobile-menu-section">
                <ul>
                    <li><Link to={pagePath.Mycourse}>{string.Mycourse}</Link></li>
                    <li><Link to={pagePath.Notification}>{string.Notification}</Link></li>
                    <li><Link to={pagePath.Message}>{string.Messages}</Link></li>                        
                    <li><Link to={pagePath.InstructorDashboard}>{string.InstructorDashboard}</Link></li>
                    <li><Link to={pagePath.Settings}>{string.Settings}</Link></li>
                    <li><Link to={pagePath.Help}>{string.Help}</Link></li>
                    <li><Link to={pagePath.Wallet}>{string.Wallet}</Link></li>
                    <li><Link to={pagePath.PurchaseHistory}>{string.PurchaseHistory}</Link></li>
                    <li><Link>{string.LogOut}</Link></li>
                </ul>
            </div>
        ])
    }

    render() {
	    return (
	        <div className="menu-wrapper mobile-menu">       
                <div className={"mobile-opener " + (this.state.isMenuOpen ? "open" : "")} onClick={() => this.toggleMenu()}>
                    <IconButton icon="menu" />	
                </div>
                <div className="mobile-logo">
                    <Link to={pagePath.Home}>
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
                    {this.renderMenuItem()}
                </div>
			</div>
		)
    }
}


export default MobileMenuSection;
