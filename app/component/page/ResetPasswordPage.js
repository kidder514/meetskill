import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import string from '../../String';

class ResetPasswordPage extends Component{
	constructor(props){
		super(props);
		this.state = {};
		this.submit = this.submit.bind(this);
	}

	submit(){

	}

	render(){
		return (
			<Container>
				<Row>
					<Col>
						<div className="reset-password-page">
							<div className="input-item">
								<input type="text" name="password" placeholder={string.password} />
								<span></span>
							</div>
							<div className="input-item">
								<input type="submit" onClick={this.submit} value={string.ResetPassword} />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ResetPasswordPage;