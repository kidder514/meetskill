import React, {Component} from 'react';
import Gautocomplete from "../helpers/GoogleAutocomplete"
import IconButton from "../uicomponent/button/IconButton"
import config from "../config"
import axios from "axios";

class DeliveryFeeSection extends Component {

	constructor(props){
		super(props);
		this.state = {
			address: "",
			coordinate: "",
			addressSelected: false,
			error: ""
		};
		this.getDelivery = this.getDelivery.bind(this);
		this.getSelfDelivery = this.getSelfDelivery.bind(this);
		this.handleLocaltion = this.handleLocaltion.bind(this);
		this.autocompleteOnChange = this.autocompleteOnChange.bind(this);
		this.submit = this.submit.bind(this);
	}

  	componentWillReceiveProps(){
  		console.log("componentWillReceiveProps");
  		console.log(this.props.userState);
  	}

  	componentWillMount(){
  	}

  	getDistance(){
		axios.post(config.googleDirectionApiUrl
			   + "origin=" + origin
			   + "&destination=" + destination
			   + "$mode=bicycling" 
			   + "&key=" + config.googleDirectionApiKey)
		.then(function (res) {
			console.log("data returned by google direction api");
			return (res.routes.bikes.distance.text);
	  	})
	  	.catch(function (error) {
			return "";
	  	});
  	}

  	calculateFee(dis){
  		return dis * 10;
  	}

  	handleLocaltion(locationObj){
		if(locationObj.formatted_address != null && locationObj.geometry != null){
			this.setState({
				address:locationObj.formatted_address,
				coordinate: String(locationObj.geometry.location.lat()) + "," + String(locationObj.geometry.location.lng()),
				addressSelected: true
			});
		}
  	}

  	autocompleteOnChange(e){
		this.setState({
			address: e.target.value, 
			coordinate: "",
			addressSelected: false
		});
  	}

  	submit(){
  		if (this.state.addressSelected)
  		{
  			this.setState({error: ""});
  			this.props.setAddress({ address: this.state.address, coordinate: this.state.coordinate});
  		} else {
  			this.setState({error: "Invalid address, please select address from the poped-up list"});
  		}
  	}

  	getDelivery(){
  		//TODO
  		// bike delivery
  		// call google direction API to get distance, and delivery time
  		// calculate delivery fee for our delivery biker
  		return {time: 23, fee: 10, distance: 5.2};
  	}

  	getSelfDelivery(){
  		//TODO
  		// car delivery
  		// get the delivery method of their self Delivery
  		// calculate the delivery price, distance and 
  		return {time: 23, fee: 10, distance: 5.3};
  	}

  	render(){
  		var error;
  		if (this.state.error == undefined || this.state.error == ""){
  			error = "";
  		}else{
  			error = this.state.error;
  		}

  		if (this.props.userState.hasAddress){
		    return (
				<div className="delivery-fee-section">
					<h3>Delivery Fee</h3>
					<span>{"Start Addrees: abc"}</span>
					<span>{"end Addrees: abc"}</span>
					<span className="delivery-fee-title">FoodYouMiss Biker:</span>
					<span className="delivery-fee-detail">{this.getDelivery().fee} AUD | {this.getDelivery().time} mins | {this.getDelivery().distance} km</span>
					<span className="delivery-fee-title">Cook Self-Delivery:</span>
					<span className="delivery-fee-detail">{this.getDelivery().fee} AUD | {this.getDelivery().time} mins | {this.getDelivery().distance} km</span>
					<hr />
					<span>Search again if the address is not correct</span>
					<div className="delivery-fee-search">
						<Gautocomplete
								className="col-sm-10 col-xs-10 search-main-left"
								fieldClass="search-main-left-input"
			    				placeholder="Search for location..."
			    				handleLocaltion={this.handleLocaltion}
			    				autocompleteOnChange={this.autocompleteOnChange}
								ref={(c) => this.gaAutocomplete2 = c}
								types="(cities)"
			    			/>
				    	<div className="col-md-2 col-xs-2 search-main-button">
				            <IconButton
				            	onClick={this.submit}
				            	icon="search"
				            />	
				    	</div>
					</div>
					<div className="delivery-fee-error">{error}</div>
				</div>
		    )
  		}else{
		    return (
				<div className="delivery-fee-section">
					<h3>Delivery Fee</h3>
					<p>unable to estimate your delivery price</p>
					<p>please enter your location</p>
					<div className="delivery-fee-search">
						<Gautocomplete
								className="col-sm-10 col-xs-10 search-main-left"
								fieldClass="search-main-left-input"
			    				placeholder="Search for location..."
			    				handleLocaltion={this.handleLocaltion}
			    				autocompleteOnChange={this.autocompleteOnChange}
								ref={(c) => this.gaAutocomplete2 = c}
								types="(cities)"
			    			/>
				    	<div className="col-md-2 col-xs-2 search-main-button">
				            <IconButton
				            	onClick={this.submit}
				            	icon="search"
				            />	
				    	</div>
					</div>
					<div className="delivery-fee-error">{error}</div>
				</div>
		    )
  		}
  	}
}

export default DeliveryFeeSection;