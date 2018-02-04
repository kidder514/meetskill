import React, { Component } from 'react';
import {
	Container, 
	Row, 
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
} from 'reactstrap';
import string from '../../String';
import pagePath from '../../pagePath';
import NoPermissionPage from './NoPermissionPage';
import resourcePath from '../../resourcePath';

class AddNewCoursePage extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: ''
		};
		
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		var user = this.props.userState;
		if (user.isLoggedin) {
			return (
				<div className="add-new-course-page">
					<Container>
						<Row>
							<Col >
								<Form>
									<FormGroup>
										<Label>{string.Password}</Label>
										<Input 
											type="text" 
											name="title"
											value={this.state.title}
											onChange={this.onChange}
										/>
										<FormFeedback>{this.state.errorPassword}</FormFeedback>
									</FormGroup>
									<FormFeedback>{this.props.ui.apiCallType == resourcePath.addCourse && this.props.ui.serverErrorMessage}</FormFeedback>
								</Form>
							</Col>
						</Row>
					</Container>
				</div>
			);
		} else {
			return (<NoPermissionPage />);
		}
	}
}

export default AddNewCoursePage;