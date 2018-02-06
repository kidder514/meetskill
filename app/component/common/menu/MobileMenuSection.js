import React, {Component} from 'react';
import {Link} from 'react-router';
import IconButton from '../../../helper/uicomponent/IconButton';
import SearchField from '../../../container/common/menu/SearchField';
import string from '../../../String';
import config from '../../../config';
import pagePath from '../../../pagePath';
import getInitial from '../../../helper/getInitial';

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
		this.slideTo = this.slideTo.bind(this);     
		this.renderMenuItem = this.renderMenuItem.bind(this);
		this.renderCategory = this.renderCategory.bind(this);
		this.renderLogin = this.renderLogin.bind(this);
		this.Login = this.Login.bind(this);
	}

	toggleMenu(){
		this.layerCount = 0;
		this.setState({isMenuOpen: !this.state.isMenuOpen});
	}

	toggleSearch(){
		this.setState({isSearchOpen: !this.state.isSearchOpen});        
	}

	Login(){
		this.toggleMenu();
		this.props.showDialog('login');
	}

	slideTo(e, count, isBack){
		this.setState({left: '-' + count * 300 + 'px'});
		if (isBack){
			var ulNode  = e.target.parentNode.parentNode;
			ulNode.className = ulNode.className.replace(' top-layer', '');
		} else {
			var siblingNode = e.target.parentNode.childNodes[1];
			siblingNode.className = siblingNode.className + ' top-layer';
		}
	}

	renderCategory(category, parentCategory, parentLayerCount){
		var currentLayerCount = parentLayerCount + 1;
		return (
			<ul className="subcategory">
				<li >
					<Link activeClassName="active" className="mobile-menu-back" onClick={(e) => this.slideTo(e, parentLayerCount, true)}>
						{string.Back}
						<span className="pull-right">
							<IconButton icon="chevron_left" />
						</span>                    
					</Link>
				</li>
				{category.map((subcategory, index) => {
					if( subcategory.subcategory ){
						return (
							<li key={'key-' + currentLayerCount + '-' + index}>
								<Link activeClassName="active" onClick={(e) => this.slideTo(e, currentLayerCount + 1, false)}>
									{subcategory.name}
									<span className="pull-right">
										<IconButton icon="chevron_right" />
									</span>                            
								</Link>
								{ this.renderCategory(subcategory.subcategory, parentCategory + subcategory.path, currentLayerCount) }
							</li>
						);
					} else {
						var path = parentCategory + subcategory.path;
						return (
							<li onClick={() => this.toggleMenu()} key={'key-' + currentLayerCount + '-' + index}>
								<Link activeClassName="active" to={path}>{subcategory.name}</Link>
							</li>
						);
					}
				})}
			</ul>
		);
	}

	renderLogin() {
		if (this.props.userState.isLoggedin) {
			return (
				<li onClick={() => this.toggleMenu()}>
					<Link to={pagePath.Logout}>
						{string.LogOut}
					</Link>
				</li>);
		} else {
			return (<li onClick={() => this.Login()}><Link>{string.Login}</Link></li>);
		}
	}

	renderMenuItem(){
		return ([
			<div 
				key="mobile-category" 
				className="mobile-category" 
				ref={(ref) => this.mobileSlider = ref}
			>
				<ul>
					<li>
						<Link onClick={ (e) => this.slideTo(e, 1, false) }>
							{string.MenuCategory}
							<span className="pull-right">
								<IconButton icon="chevron_right"/>
							</span>
						</Link>
						{ this.renderCategory(this.props.category, pagePath.Category, 0) }
					</li>
				</ul>
			</div>,         
			<div key="mobile-menu-section" className="mobile-menu-section">
				<ul className="mobile-common-menu">
					<li onClick={() => this.toggleMenu()}>
						<Link activeClassName="active" to={pagePath.ShoppingCart}>{string.MyCart}</Link>
					</li>                    
					<li onClick={() => this.toggleMenu()}>
						<Link activeClassName="active" to={pagePath.Mycourse}>{string.Mycourse}</Link>
					</li>
					<li onClick={() => this.toggleMenu()}>
						<Link activeClassName="active" to={pagePath.Inbox}>{string.Inbox}</Link>
					</li>
					<li onClick={() => this.toggleMenu()}>
						<Link activeClassName="active" to={pagePath.Notification}>{string.Notification}</Link>
					</li>
				</ul>
				{(!!this.props.userState.isLoggedin) && 
					<ul className="mobile-account-menu">
						<li  onClick={() => this.toggleMenu()}>
							<Link activeClassName="active" to={pagePath.Account + pagePath.ViewPublicProfile}>{string.AccountViewPublicProfile}</Link>
						</li>
						<li onClick={() => this.toggleMenu()}>
							<Link activeClassName="active" to={pagePath.Account + pagePath.Profile}>{string.AccountProfile}</Link>
						</li>
						<li onClick={() => this.toggleMenu()}>
							<Link activeClassName="active" to={pagePath.Account + pagePath.Account}>{string.AccountAccount}</Link>
						</li>
						<li onClick={() => this.toggleMenu()}>
							<Link activeClassName="active" to={pagePath.Account + pagePath.Setting}>{string.AccountSetting}</Link>
						</li>
						<li onClick={() => this.toggleMenu()}>
							<Link activeClassName="active" to={pagePath.Account + pagePath.DeleteAccount}>{string.AccountDeleteAccount}</Link>
						</li>
					</ul>
				}
				<ul className="second-section">
					<li onClick={() => this.toggleMenu()}><Link to={pagePath.Help}>{string.Help}</Link></li>                    
					{this.renderLogin()}
				</ul>
			</div>
		]);
	}

	render() {
		return (
			<div className="menu-wrapper mobile-menu">   
				<div className="mobile-header">
					<div className="logo-section">
						<div className={'mobile-opener ' + (this.state.isMenuOpen ? 'open' : '')} onClick={() => this.toggleMenu()}>
							<IconButton icon="menu" />  
						</div>
						<div className="mobile-logo">
							<Link to={pagePath.Home}>
								<img src={config.logoUrl} />
							</Link>
						</div>
					</div>
					<div>
						<Link className="mobile-shopping-cart" to={pagePath.ShoppingCart}>
							<IconButton className="icon-button" icon="shopping_cart" />
						</Link>
						<div className={'search-icon ' + (this.state.isSearchOpen ? 'open' : '')} onClick={() => this.toggleSearch()}>
							<IconButton icon="search" />    
						</div>
					</div>
				</div>

				<div className={'mobile-search-wrapper ' + (this.state.isSearchOpen ? 'open' : '')}>
					<SearchField />
				</div>
				<div className={'mobile-slider-wrapper ' + (this.state.isMenuOpen ? 'open' : '')}>
					<IconButton onClick={() => this.toggleMenu()} className='close-mobile-slider' icon="clear" /> 			
					<div 
						id={'mobile-slider'} 
						style={{left: this.state.left}}>
						{(!!this.props.userState.isLoggedin) && 
							<div key="mobile-account-section" className="mobile-account-section">
								<Link onClick={() => this.toggleMenu()} className="mobile-initials" to={pagePath.Account}>
									{ getInitial(this.props.userState.firstName, this.props.userState.lastName) }
								</Link>
								<Link onClick={() => this.toggleMenu()} className='mobile-name' to={pagePath.Account}>
									{this.props.userState.firstName + ' ' + this.props.userState.lastName}
								</Link>
							</div>
						}
						{this.renderMenuItem()}
					</div>
				</div>
				<div onClick={() => this.toggleMenu()} className={'mobile-menu-overlay ' + (this.state.isMenuOpen ? 'on' : '')}></div>
			</div>
		);
	}
}


export default MobileMenuSection;
