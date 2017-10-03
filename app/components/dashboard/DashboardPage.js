import React, {Component} from 'react';
import {Link} from "react-router";

class DashboardPage extends Component {

	componentWillMount() {
		let query = "";
		let userState = this.props.userState;
		let userData = this.props.userData;

        if(this.props.userData.length <= 0){
      	    this.props.userDataCall(query);
        }
  	}

  	render(){
	    return (
  				<div className="container ">
  					<div className="row dashboard-content">
	  					<div className="col-sm-3 dashboard-sidebar">
	  						<div className="dashboard-avatar">
	  							<img src={this.props.userState.avatar} alt="User Avatar" className="img-circle"/>
				                <Link to="/edit-dishes" className="user-menu-item" activeClassName="current-menu-item"> 
				                	<button className="btn btn-default" >Edit Dishes</button>
				                	
				                </Link>
				                <Link to="/post-new-dish" className="user-menu-item" activeClassName="current-menu-item"> 
				                	<button className="btn btn-default" >Post a Dish</button>
				                </Link>
	  						</div>
							<div className="dashboard-menu">
					    		<ul className="list-unstyled">
					    			<li>
						                <Link to="/dashboard" className="user-menu-item" activeClassName="current-menu-item"> 
						                	Dashboard
						                </Link>
					    			</li>
					    			<li>
						                <Link to="/dashboard/order-history" className="user-menu-item" activeClassName="current-menu-item"> 
						                	Order History
						                </Link>
					    			</li>
					    			<li>
						                <Link to="/dashboard/notification" className="user-menu-item" activeClassName="current-menu-item"> 
						                	Notifications
						                </Link>
					    			</li>
					    			<li>
						                <Link to="/dashboard/settings" className="user-menu-item" activeClassName="current-menu-item"> 
						                	Settings
						                </Link>
					    			</li>
					    			<li>
						                <Link to="/dashboard/help" className="user-menu-item" activeClassName="current-menu-item"> 
						                	Help
						                </Link>
					    			</li>
					    			<li>
						                <Link to="/signout" className="user-menu-item" activeClassName="current-menu-item"> 
						                	Logout
						                </Link>
					    			</li>
					    		</ul>
					    	</div>
	  					</div>
	  					<div className="col-sm-9">
			            	{this.props.children}
			            </div>
		            </div>
  				</div>
	    )
  	}
}

export default DashboardPage;