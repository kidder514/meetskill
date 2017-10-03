import React, {Component} from 'react';
import SingleDishItem from "./SingleDishItem";

class DishList extends Component {

	render(){
	    return (
	    	<div className="container-fluid">
	    		<div className="row">
		          	{
		          	this.props.data.map(
		          		dish => <SingleDishItem 
		          			key={"dish" + dish.postId} 
		          			dish={dish} 
		          			onMouseEnter={this.props.onMouseEnter}
		          			onMouseLeave={this.props.onMouseLeave}
		          			/>
		          		)
		          	}
	          	</div>
	    	</div>
	    )
	};
}

export default DishList;
