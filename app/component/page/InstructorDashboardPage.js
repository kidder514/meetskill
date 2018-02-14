import React, { Component } from 'react';
import { Link } from 'react-router';
import pagePath from '../../pagePath';
import { Button, FormGroup } from 'reactstrap';
import string from '../../String';
import SingleCourseItem from '../common/SingleCourseItem';
class InstructorDashboardPage extends Component{
	constructor(props){
		super(props);
		this.onActivate = this.onActivate.bind(this);
		this.onCreateNewCourse = this.onCreateNewCourse.bind(this);		
		this.renderActivationScreen = this.renderActivationScreen.bind(this);
		this.renderCourseListScreen = this.renderCourseListScreen.bind(this);
		this.renderAddCourseScreen = this.renderAddCourseScreen.bind(this);		
	}

	componentDidMount(){
		if (this.props.myCourseList.length) {
			this.props.loadMyCourseListCall();
		}
	}

	onActivate(){
		this.props.activateInstructorCall();
	}

	onCreateNewCourse(){
		this.props.activateInstructorCall();
	}
	
	renderActivationScreen(){
		return ([
			<div key="instructor-page-header" className="instructor-page-header-wrapper ">
				<div className="instructor-page-header container">
					<div className="page-title">
						<h1>{string.InstructorDashboard}</h1>
					</div>
					<div className="action-button">
						<Button className="header-button" onClick={() => this.onActivate()}>
							{string.ActivateToBecomeAnInstructor}
						</Button>
					</div>
				</div>
			</div>,
			<div key="instructor-page-content" className="container">
				<h2>{string.ActivateToBecomeAnInstructor}</h2>
				<p className="width60">{string.CreateCourseContent}</p>
				<FormGroup>
					<Button onClick={() => this.onActivate()}>{string.Activate}</Button>
				</FormGroup>
			</div>
		]);
	}

	renderCourseListScreen(){
		if (this.props.myCourseList) {
			return false;
		}

		this.props.myCourseList.map((course) => {
			return <SingleCourseItem item={course} />;
		});
	}

	renderAddCourseScreen(){
		return ([
			<div key="instructor-page-header" className="instructor-page-header-wrapper ">
				<div className="instructor-page-header container">
					<div className="page-title">
						<h1>{string.InstructorDashboard}</h1>
					</div>
					<div className="action-button">
						<Link to={pagePath.AddNewCourse}>
							<Button className="header-button" onClick={() => this.onCreateNewCourse()}>
								{string.CreateCourseTitle}
							</Button>
						</Link>					
					</div>
				</div>
			</div>,
			this.renderCourseListScreen(),
			<div key="instructor-page-content" className="container">
				<h2>{string.CreateCourseTitle}</h2>
				<p className="width60">{string.CreateCourseContent}</p>
				<FormGroup>
					<Link to={pagePath.AddNewCourse}>
						<Button onClick={() => this.onCreateNewCourse()}>{string.Create}</Button>
					</Link>
				</FormGroup>
			</div>
		]);
	}

	render(){
		if (this.props.userState.isInstructor){
			return this.renderAddCourseScreen();
		} else {
			return this.renderActivationScreen();
		}

	}
}

export default InstructorDashboardPage;