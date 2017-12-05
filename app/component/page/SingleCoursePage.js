import React, { Component } from 'react';
import {Container, Row, Col} from "reactstrap"
import LoadingSpinner from "../../helper/uicomponent/LoadingSpinner"
import { DrawStar } from "../../helper/uicomponent/DrawStar"
import { Link } from "react-router"
import string from "../../String"
import pagePath from "../../pagePath"
import { RemainingTime } from "../../helper/uicomponent/RemainingTime"

class SingleCoursePage extends Component{
	constructor(props){
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}

	componentDidMount(){
		if (this.props.course.length <= 0){
			this.props.loadCourse();
		}
	}

	renderComponent(){
		let course = this.props.course;
		return ([
			<div key="single-course-main" className="single-course-main">
				<Container>
					<Row>
						<Col xs="12" sm="12" md="9" lg="9" xl="9">
							<h1>{course.title}</h1>
							<h2>course headline</h2>
							{ DrawStar(course.avg_rating_recent, course.num_reviews) }
							<p>
								<span>{course.num_subscribers + " " + string.StudentsEnrolled}</span>
							</p>
							<p>
								{string.CreateBy + " "}
								<Link to={pagePath.Author + "/" + course.visible_instructors[0].id}>{course.visible_instructors[0].title}</Link>
								{string.LastUpdated + " " + course.last_update_date}
							</p>
							<p>
								<i className="material-icons">language</i>{course.language + "language"}
								<i className="material-icons">closed_caption</i>{course.cclanguage + "cc language"}
							</p>
						</Col>
						<Col className="single-course-board" xs="12" sm="12" md="3" lg="3" xl="3">
							<div>
								<img src={course.image_240x135} />
								<i className="material-icons">play_circle_outline</i>
							</div>
							<div>
								<span>{course.discount.price.price_string}</span><span>{course.price}</span>
							</div>
							<div>
								{course.discount.discount_percent_for_display + "%" + string.Off}
							</div>
							<div>
								{ RemainingTime(course.discount.campaign.end_time) +  string.LeftAtThisPrice}
							</div>
							<button onClick={() => this.props.buyCourse(course.id)}>{string.BuyNow}</button>
							<button onClick={() => this.props.addToCart(course.id)}>{string.AddToCart}</button>
							<div>
								<strong>{string.Includes}</strong>
								<ul>
									<li>{course.content_info + string.OnDemandVideo}</li>
									<li>{course.supplementalResources + string.SupplementalResources}</li>
									<li>{string.FullLifetimeAccess}</li>
									<li>{string.AccessonmobileandTV}</li>					
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			</div>,
			<Container key="single-course">
				<Row>
					<Col xs="12" sm="12" md="9" lg="9" xl="9">
						<div>
							<h2>What will I learn</h2>
						</div>
						<div>
							<h2>requirements</h2>
						</div>
						<div>
							<h2>description</h2>
						</div>
					</Col>
				</Row>
			</Container>
		])
	}

    render(){
	    return (
	    	<div className="course-page">
				{this.props.course.id == undefined ? <LoadingSpinner /> : this.renderComponent()}
	    	</div>
	    )
  	}
}

export default SingleCoursePage;
