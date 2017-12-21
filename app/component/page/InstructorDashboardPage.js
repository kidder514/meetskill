import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col} from 'reactstrap';
import string from '../../String';

class InstructorDashboardPage extends Component{
	constructor(props){
		super(props);
		this.onActivate = this.onActivate.bind(this);
	}

	onActivate(){
		this.props.activateInstructorCall({},{
			'x-user-id': this.props.userState.uid,
			'x-access-token': this.props.userState.token                    
		});
	}

	render(){
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
}

export default InstructorDashboardPage;