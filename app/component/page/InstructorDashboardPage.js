import React, { Component } from 'react'
import { Jumbotron, Button, Container, Row, Col} from 'reactstrap'
import string from "../../String"

class InstructorDashboardPage extends Component{
	constructor(props){
		super(props);
	}

    render(){
	    return (
			<Container>
				<Row>
					<Col>
						<Jumbotron>
							<h1>{string.CreateCourseTitle}</h1>
							<p>{string.CreateCourseContent}</p>
							<Button>{string.CreateNewCourse}</Button>
						</Jumbotron>
					</Col>
				</Row>
			</Container>
	    )
  	}
}

export default InstructorDashboardPage;