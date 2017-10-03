import React, {Component} from 'react';
import {Link} from "react-router";

class UserMenuLayer extends Component{

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.props.toggleUserMenu(false);
	}

    render(){

    	var menuClass = this.props.ui.showUserMenu ? "user-menu-show" : "user-menu-hide";
    	document.body.className = this.props.ui.showUserMenu ? "showing-menu" : "";

    	if (this.props.userState.isLoggedIn)
    	{
    		return (
		    	<div className={"user-menu " + menuClass}>
		    		<div className="main-menu">
						<ul className="list-unstyled">
			    			<li>
				                <Link to="/homefood" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Home Food 
									<i className="material-icons pull-right">home</i>
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/message" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Message
									<i className="material-icons pull-right">chat_bubble_outline</i>
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/mypage" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	My Page
									<i className="material-icons pull-right">list</i>
				                </Link>
			    			</li>
			    		</ul>
		    		</div>
		    		<div className="main-user-menu">
						<ul className="list-unstyled">
							<li>
				                <Link to="/dashboard" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Dashboard
									<i className="material-icons pull-right">dashboard</i>
				                </Link>
			    			</li>

			    			<li>
				                <Link to="/dashboard/order-history" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Order History
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/dashboard/likes" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Likes
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/dashboard/notification" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Notifications
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/dashboard/settings" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Settings
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/dashboard/help" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Help
				                </Link>
			    			</li>
		    			</ul>
					</div>
		    		<div className="main-user-menu">
						<ul className="list-unstyled">
							<li>
				                <Link to="/post-new-dish" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Post a Dish
				                </Link>
			    			</li>

			    			<li>
				                <Link to="/mypage" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Edit Dishes
				                </Link>
			    			</li>

							<li>
				                <Link to="/how-it-works" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	How it works
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/signout" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Logout
				                </Link>
			    			</li>
			    		</ul>
		    		</div>
		    	</div>
    			);
    	}else{
    		return (
		    	<div className={"user-menu " + menuClass}>
		    		<div className="main-user-menu">
						<ul className="list-unstyled">
			    			<li>
				                <Link to="/homefood" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Home Food 
									<i className="material-icons pull-right">home</i>
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/becomeacook" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Become a Cook
									<i className="material-icons pull-right">assignment_turned_in</i>
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/Help" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Help
									<i className="material-icons pull-right">help_outline</i>
				                </Link>
			    			</li>
			    		</ul>
		    		</div>
		    		<div className="main-user-menu">
						<ul className="list-unstyled">
			    			<li>
				                <Link to="/signup" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Sign Up
				                </Link>
			    			</li>
			    			<li>
				                <Link to="/login" className="user-menu-item" onClick={this.onClick} activeClassName="current-menu-item"> 
				                	Log In
				                </Link>
			    			</li>
		    			</ul>
		    		</div>
		    	</div>
    			);
    	}
  	}
}

export default UserMenuLayer;