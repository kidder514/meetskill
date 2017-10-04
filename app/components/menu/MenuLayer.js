import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from '../../uicomponent/button/IconButton';
import config from "../../config"

class MenuLayer extends Component{

    render() {
    	var isShown = !this.props.ui.showUserMenu;

		if (this.props.userState.isLoggedIn){
			return (
	            <div className="menu clearfix">
	                <Link to="/homefood" className="logo pull-left" activeClassName="current-menu-item">
	            		<img src={config.logoUrl}/>
	                </Link>
			    	<a className={"menu-item-button menu-avatar pull-right " + (this.props.ui.showUserMenu ? "current-menu-item" : "")}  
			    		onClick={() => this.props.toggleUserMenu(isShown)}>
						<img src={this.props.userState.avatarUrl} className="img-circle" />
					</a>
	                <Link to="/mypage" className="menu-item-button col-xs-2 col-sm-1 pull-right" activeClassName="current-menu-item">
	                    {"My Page"}
	                </Link>
	                <Link to="/message" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Message"}
	                </Link>
	                <Link to="/homefood" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Home Food"}
	                </Link>
	            </div>
        	)
		}else{
			return (
	            <div className="menu clearfix">
	                <Link to="/" className="logo pull-left" activeClassName="current-menu-item">
	            		<img src={config.logoUrl}/>
	                </Link>
			    	<a className={"menu-item-button burger-menu pull-right " + (this.props.ui.showUserMenu ? "current-menu-item" : "")}  
			    		onClick={() => this.props.toggleUserMenu(isShown)}  >
			    		<IconButton icon={"menu"} />
					</a> 
	                <Link to="/login" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Log In"}
	                </Link>
	                <Link to="/signup" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Sign Up"}
	                </Link>
	                <Link to="/help" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Help"}
	                </Link>
	                <Link to="/becomeacook" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Become a Cook"}
	                </Link>
	                <Link to="/homefood" className="menu-item-button pull-right" activeClassName="current-menu-item">
	                    {"Home Food"}
	                </Link>
	            </div>
        	)
		}
    	
    }
}

export default MenuLayer;