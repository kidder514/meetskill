import React, {Component} from 'react';
import DishList from "./common/DishList"
import SideBar from "../containers/common/SideBar"
import SearchBox from "../containers/common/Search"

class MyPagePage extends Component{

	componentDidMount() {
		let query = {};

		let userState = this.props.userState;
		
		if(userState.isLoggedIn){
			query = {userId: userState.userId};
		}
		
        if(this.props.myDishListData.length <= 0){
      	    this.props.initMyDish(query);
        }
  	}

  	render(){
  		if(this.props.myDishListData.length > 0){
	  		return(
	  			<div className="container">
		  			<div className="row">
		  				<div className="col-sm-8">
		  					<DishList data={this.props.myDishListData} />
		  				</div>
						<div className="col-sm-4 hidden-xs">
		            		<SideBar currentPage={"home"} />
		                </div>
		  			</div>
	        	</div>
	  		);
  		}else{
  			return (
  				<div className="container">
  					<div className="row">
  						<div className="col-sm-8">
	  						<div>
	  							You haven't post any dishes yet.
	  						</div>
  						</div>
						<div className="col-sm-4 hidden-xs">
		            		<SideBar currentPage={"home"} />
		                </div>
  					</div>
  				</div>
  			);
  		}
    }
}

export default MyPagePage;
