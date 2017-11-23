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
            left: undefined,
        };
        this.layerCount = 0;
        
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.renderMenuItem = this.renderMenuItem.bind(this);
        this.slideTo = this.slideTo.bind(this);     
        this.renderCategory = this.renderCategory.bind(this);
    }

    toggleMenu(){
        this.layerCount = 0;
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }
    toggleSearch(){
        this.setState({isSearchOpen: !this.state.isSearchOpen});        
    }

    slideTo(e, count, isBack){
        this.setState({left: "-" + count * 100 + "vw"});
        if (isBack){
            var ulNode  = e.target.parentNode.parentNode;
            console.log(ulNode);
            ulNode.className = ulNode.className.replace(" top-layer", "");
        } else {
            var siblingNode = e.target.parentNode.childNodes[1];
            siblingNode.className = siblingNode.className + " top-layer";
        }
    }

    renderCategory(category, parentCategory, parentLayerCount){
        var currentLayerCount = parentLayerCount + 1;
        return (
            <ul className="subcategory">
                <li >
                    <Link className="mobile-menu-back" onClick={(e) => this.slideTo(e, parentLayerCount, true)}>
                        {string.Back}
                        <span className="pull-right">{"<"}</span>                    
                    </Link>
                </li>
                {category.map((subcategory, index) => {
                    if( !!subcategory.subcategory ){
                        return (
                            <li key={"key-" + currentLayerCount + "-" + index}>
                                <Link onClick={(e) => this.slideTo(e, currentLayerCount + 1, false)}>
                                    {subcategory.name}
                                    <span className="pull-right">></span>                            
                                </Link>
                                { this.renderCategory(subcategory.subcategory, parentCategory + subcategory.path, currentLayerCount) }
                            </li>
                        );
                    } else {
                        var path = parentCategory + subcategory.path;
                        return (
                            <li onClick={() => this.toggleMenu()} key={"key-" + currentLayerCount + "-" + index}>
                                <Link to={path}>{subcategory.name}</Link>
                            </li>
                        );
                    }
                })}
            </ul>
        )

    }

    renderMenuItem(){
        return ([
            <hr key="hr1"></hr>,
            <div 
                key="mobile-category" 
                className="mobile-category" 
                ref={(ref) => this.mobileSlider = ref}
            >
                <ul>
                    <li>
                        <Link onClick={ (e) => this.slideTo(e, 1, false) }>
                            {string.MenuCategory}
                            <span className="pull-right">></span>
                        </Link>
                        { this.renderCategory(this.props.category, pagePath.Category, 0) }
                    </li>
                </ul>
            </div>,
            <hr key="hr2"></hr>,            
            <div key="mobile-menu-section" className="mobile-menu-section">
                <ul>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.Mycourse}>{string.Mycourse}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.Notification}>{string.Notification}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.Message}>{string.Messages}</Link></li>                        
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.InstructorDashboard}>{string.InstructorDashboard}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.Settings}>{string.Settings}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.Help}>{string.Help}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.Wallet}>{string.Wallet}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link to={pagePath.PurchaseHistory}>{string.PurchaseHistory}</Link></li>
                    <li onClick={() => this.toggleMenu()}><Link>{string.LogOut}</Link></li>
                </ul>
            </div>
        ])
    }

    render() {
	    return (
	        <div className="menu-wrapper mobile-menu">   
                <div className="mobile-header">
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
                </div>    

                <div className={"mobile-search-wrapper " + (this.state.isSearchOpen ? "open" : "")}>
                    <SearchField />
                </div>
                <div 
                    id={"mobile-slider"} 
                    className={(this.state.isMenuOpen ? "open" : "")} 
                    style={{left: this.state.left}}>
                    {(!!this.props.userState.isLoggedin) && 
                    <div key="mobile-account-section" className="mobile-account-section">
                        <Link to={pagePath.Account}>
                            { getInitial(this.props.userState.firstName, this.props.userState.lastName) }
                        </Link> 
                    </div>}
                    {this.renderMenuItem()}
                </div>
			</div>
		)
    }
}


export default MobileMenuSection;
