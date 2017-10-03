import React, {Component} from 'react';
import {Link} from "react-router";
import OrderSection from "./OrderSection"

class CheckoutPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			dish:{},
			isDishValid: false,
			dateTime: {},
			isTimeValid: false,
			Address: {},
			isAddressValid: false,
			contact: {},
			isContactValid: false,
			payment: {},
			isPaymentValid: false
		};
	}

  	render(){
  		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-xs-12 pull-right">
						<h1>Order Preview</h1>
						<ul className="order-preview">
							<li>
								<div>
									dishes
									<div className="verification-icon"></div>
								</div>
							</li>
							<li>
								<div>
								Date - Time
									<div className="verification-icon"></div>
								</div>
							</li>
							<li>
								<div>
								delivery Address
									<div className="verification-icon"></div>
								</div>					
							</li>
							<li>
								<div>
									<div className="verification-icon"></div>
								</div>			
							</li>
							<li>
								<div>
								Payment
									<div className="verification-icon"></div>
								</div>		
							</li>
						</ul>
						<button className="pull-right"> Continue </button>

					</div>
					<div className=" col-md-8 col-xs-12">
						<ul className="order-steps">
							<li>
								<div>
									<h2>Dish List</h2>
									Dish List
								</div>
							</li>
							<li>
								<div>
									<h2>Date Time</h2>
									Date Time
								</div>
							</li>
							<li>
								<div>
									<h2>Delivery Address</h2>
									Delivery Address
								</div>
							</li>
							<li>
								<div>
									<h2>Contact Detail</h2>
									Contact Detail
								</div>
							</li>
							<li>
								<div>
									<h2>Payment</h2>
									Payment
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
  			);
  	}
}

export default CheckoutPage;