import React, {Component} from 'react';
import SideBar from "../containers/common/SideBar"
import SingleDishMetaSection from "./common/SingleDishMetaSection"
import DeliveryFee from "../containers/DeliveryFee"
import Order from "../containers/Order"

class SingleDishPage extends Component {
	constructor(props){
		super(props);
		this.toggleDish = this.toggleDish.bind(this);
	}

	componentWillMount() {
		let query = "";
		let userState = this.props.userState;

  	    this.props.loadSingleDish(query);
  	}

  	toggleDish(showDish){
  		this.tabDish.style.display = showDish ? "block" : "none";
  		this.tabItemDish.className = showDish ? "tab-item active":"tab-item";
  		this.tabReview.style.display = showDish ? "none" : "block";
  		this.tabItemReview.className = showDish ? "tab-item":"tab-item active";
  	}

  	render(){
	    return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<SingleDishMetaSection />
  						<div className="single-dish-content">
  							<div className="tab clearfix">
								<div className="tab-item active" ref={(el) => { this.tabItemDish = el; }} onClick={() => this.toggleDish(true)}>Dish</div>
								<div className="tab-item" ref={(el) => { this.tabItemReview = el; }} onClick={() => this.toggleDish(false)}>Review</div>
  							</div>
  							<div className="tab-content">
  								<div className="tab-dish" ref={(el) => { this.tabDish = el; }}>
	  								<div className="row">
	  									<div className="col-sm-6">
	  										<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  										<div className="row">
	  											<div className="col-sm-4">
	  												<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  											</div>
												<div className="col-sm-4">
	  												<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  											</div>
												<div className="col-sm-4">
	  												<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  											</div>
	  										</div>
	  									</div>
	  									<div className="col-sm-6">
	  										<h1 className="single-dish-title">big bowl of fried rice</h1>
  											<div className="row clearfix">
  												<div className="col-sm-6">
  												1 serve( for 1 people)
  												</div>
  												<div className="col-sm-6">
	  												<div className="package-price">
		  												$10.6
															<button type="button">add</button>
													</div>
  												</div>
  											</div>
  											<div className="row clearfix">
  												<div className="col-sm-6">
  												family pack (for 10 people)
  												</div>
  												<div className="col-sm-6">
	  												<div className="package-price">
	  												$56  
														<button type="button">add</button>
													</div>
  												</div>
  											</div>
	  										<hr />
	  										<p>order for now/ tomorrow/26th of Jun</p>
	  										<h4>Description</h4>
	  										<p>voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
	  										<hr />
	  										<div>
	  											<div className="other-info-item">
	  												<div className="other-info-title">Allergens:</div>
	  												<div className="other-info-content">Nuts free, Diary Free, Wheat Free</div>
	  											</div>
	  											<div className="other-info-item">
	  												<div className="other-info-title">Delivery Ratio:</div>
	  												<div className="other-info-content">5km</div>
	  											</div>
	  											<div className="other-info-item">
	  												<div className="other-info-title">Delivery Suburbs:</div>
	  												<div className="other-info-content">Sydney, Hurstville, Auburn</div>
	  											</div>
	  										</div>
	  									</div>
	  								</div>
		  							<div className="row">
		  								<hr />
		  								<h1>Other food form James</h1>
		  								<p>the format and data of this section should be same as newby Page, here it is simplified</p>
		  								<div className="col-sm-4">
		  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
		  								</div>
		  								<div className="col-sm-4">
		  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
		  								</div>
		  								<div className="col-sm-4">
		  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
		  								</div>
		  							</div>
  								</div>
  								<div className="tab-review" ref={(el) => { this.tabReview = el; }}>
  									no review at the moment
  								</div>
  							</div>
  						</div>
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

export default SingleDishPage;
