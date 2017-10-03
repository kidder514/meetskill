import React, {Component} from 'react';
import SingleDishMetaSection from "./common/SingleDishMetaSection"
import DishList from "./common/DishList"
import DeliveryFee from "../containers/DeliveryFee"
import Order from "../containers/Order"

class CookPage extends Component {

	componentDidMount() {
		let query = {};

		let userState = this.props.userState;
		
		if(userState.isLoggedIn){
			query = {userId: userState.userId};
		}
		
        if(this.props.dishListData.length <= 0){
      	    this.props.initCookCall(query);
        }
  	}
  	render(){
	    return (
		<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<SingleDishMetaSection />
		  				<DishList data={this.props.dishListData} />
					</div>
					<div className="col-sm-4">
						<DeliveryFee />
						<hr />
						<Order />
	                </div>
				</div>				
			</div>
	    )
  	}
}

export default CookPage;