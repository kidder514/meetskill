import React, {Component} from 'react';
import {Link} from "react-router";

class OrderSection extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}

  	render(){
  		return (
  			<div>	
  				<h1>Your order</h1>
				<h3>James' Indian Food</h3>
					<p>1 fried rice $ 10.5</p>
					<p>single serve</p>
				<strong>Delivery: $39</strong><br />
				<strong>Total: $135.5</strong><br />
                <Link to="/checkout"> 
					<button className="order-button">
						Order Now
					</button>			
				</Link>
  			</div>
  			);
  	}
}

export default OrderSection;