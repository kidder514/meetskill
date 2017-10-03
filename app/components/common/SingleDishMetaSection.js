import React, {Component} from 'react';
import {Link} from "react-router";
import {drawStars} from "../../helpers/drawStars"

class SingleDishMetaSection extends Component {

	constructor(props){
		super(props);
		this.expandDescription = this.expandDescription.bind(this);
	}

  	componentDidMount(){
  		if (this.descriptionText.scrollHeight <= 80){
  			this.expandButton.style.display = "none";
  		}
  	}

  	expandDescription(){
  		this.expandButton.style.display = "none";
  		this.descriptionText.style.overflow = "unset";
  		this.descriptionText.style.height = "auto";
  	}

  	render(){
	    return (
			<div className="clearfix text-center">
				<div className="single-dish-meta-wrapper">
					<Link to="/cook/1">
						<img className="img-circled" src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png" alt="profile-avatar" />
					</Link>
					<div className="single-dish-meta clearfix">
					<Link to="/cook/1">
						<h2>James' indian food</h2>		
					</Link>
						23 Viking Street, Campsie NSW
					</div>	
				</div>
				<hr />
				<div className="clearfix">
					<div className="single-dish-meta-icon">
						<i className="material-icons">mail_outline</i>Inbox
					</div>
					<div className="single-dish-meta-icon">
						<i className="material-icons">today</i>Available date
					</div>
					<div className="single-dish-stars">
						{drawStars(4.5, 30)}							
					</div>
				</div>
				<hr />
				<div className="single-dish-description-wrapper">
					<p ref={(el) => { this.descriptionText = el; }}  className="single-dish-description">unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
					<div ref={(el) => { this.expandButton = el; }} className="single-dish-description-expand" onClick={() => this.expandDescription()}>expand</div>
				</div>
			</div>
	    )
  	}
}

export default SingleDishMetaSection;
