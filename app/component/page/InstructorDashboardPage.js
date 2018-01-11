import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col} from 'reactstrap';
import string from '../../String';

class InstructorDashboardPage extends Component{
	constructor(props){
		super(props);
		this.onActivate = this.onActivate.bind(this);
		this.renderActivationScreen = this.renderActivationScreen.bind(this);
		this.renderCourseListScreen = this.renderCourseListScreen.bind(this);
		this.renderAddCourseScreen = this.renderAddCourseScreen.bind(this);		
	}

	onActivate(){
		this.props.activateInstructorCall({},{
			'x-user-id': this.props.userState.uid,
			'x-access-token': this.props.userState.token                    
		});
	}

	renderActivationScreen(){
		return (
			<Container>
				<Row>
					<Col>
						<Jumbotron>
							<h1>{string.CreateCourseTitle}</h1>
							<p>{string.CreateCourseContent}</p>
							<Button onClick={() => this.onActivate()}>{string.Activate}</Button>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
		);
	}

	renderCourseListScreen(){
		return (
			<div>
				<h1>Add new course here</h1>
				<div>Course List</div>
			</div>
		);
	}

	renderAddCourseScreen(){
		return (
			<div>Add new course here</div>
		);
	}

	render(){
		if (this.props.userState.isInstructor){
			// logic here should
			// 1. display loading spinner, and call api to get the courses of current instructor
			// 2.1. if no courses, render add course screen
			// 2.2. if there is courses, render course list screen
			return this.renderAddCourseScreen();
		} else {
			return this.renderActivationScreen();
		}

	}
}

export default InstructorDashboardPage;