import React, { Component } from 'react';
import { Link } from "react-router";
import IconButton from "../../uicomponent/button/IconButton"
import Avatar from "../../uicomponent/button/Avatar"
import { drawStars } from "../../helpers/DrawStars"

class SingleDishItem extends Component {
	constructor(props){
		super(props);
		this.handleImageClick = this.handleImageClick.bind(this);
		this.expandOthers = this.expandOthers.bind(this);
	}

	handleImageClick(imgs,imgIndex){
		this.props.openImgLayer(imgs,imgIndex);
	}

	expandOthers(othersSection){
		let display = othersSection.style.display;
		othersSection.style.display = (display == "block") ? "none" : "block";
	}

	toggleLike() {
		return ;
	}

	generateContent(){

		const dish = this.props.dish;
		var stars = drawStars(dish.postRating, dish.ratingNumber);
		
		return (
			<article 
				className="col-xs-12 col-sm-6 col-lg-4 dish-list-item"  
				onMouseEnter={this.props.onMouseEnter ? () => {this.props.onMouseEnter(dish.authorId)} : false}
				onMouseLeave={this.props.onMouseLeave ? () => {this.props.onMouseLeave(dish.authorId)} : false}
				>
				<div className="dish-padding-layer">
		            <section className="clearfix image-wrapper">
		            	<Link to={"/dish/" + dish.postId} >
		            		<div className="dish-img" style={
		            			{backgroundImage: 'url(' + this.props.dish.postImgUrls[0].thumbnail + ')',}
		            		}>
		            		</div>
		            	</Link>
			            <div className="dish-like-icon">
		            		<a onClick={this.toggleLike()}> 
								<IconButton icon={"favorite_border"} />
		            		</a>
			            </div>
						<div className="dish-cook-info">
			            	<Link to={"/cook/" + dish.authorId} className="dish-cook-link img-circle">
			            		<Avatar src={dish.authorImg} alt={dish.authorName} />
			            	</Link>
				            <span className="dish-line dish-cook-name">
			            		{dish.authorName}			            	
				            </span>
			            </div>
		            </section>
		            <div className="short-summary">
		            	<Link className="dish-title dish-line clearfix" to={"/dish/" + dish.postId}>
							{dish.postTitle}
		            	</Link>
		            	<div className="dish-price dish-line clearfix">
		            		From ${dish.postPrice} | ({dish.postPortions}) portions left
		            	</div>
		            	<div className="rating-section clearfix">
		            		{stars}
		            		<span className="dish-rating">{"  " + (dish.ratingNumber? dish.ratingNumber : " 0 " )+ " reviews"}</span>
		            	</div>
		            	<div className="dish-meta clearfix">
		            		<span>{dish.category} | {dish.region} | {dish.allergen}</span>
		            	</div>
		            </div>
		        </div>
	    	</article>
    	);
	}

	render() {
		if(this.props.dish){
		    return this.generateContent();
		}else{
			return (<div>unable to obtain current post data.</div>);
		}
	}
}

export default SingleDishItem;
