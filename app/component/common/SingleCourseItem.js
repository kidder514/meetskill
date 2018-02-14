import React, { Component } from 'react';
import { Col } from 'reactstrap';

class SingleCourseItem extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Col xs="12" sm="12" md="9" lg="9" xl="9">
				course item
			</Col>
		);
	}
}

export default SingleCourseItem;