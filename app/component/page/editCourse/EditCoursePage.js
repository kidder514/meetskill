import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router';
import string from '../../../String';
import pagePath from '../../../pagePath';
import isObjectEmpty from '../../../helper/isObjectEmpty';
import NotFoundPage from '../../../component/page/NotFoundPage';
import config from '../../../config';

class EditCoursePage extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {
		const { userState, singleMyCourse } = this.props;
		if ( userState.isLoggedin && isObjectEmpty(singleMyCourse)) {
			// this.API call is not completed.
			// this.props.loadSingleMyCourseCall();
		}
	}

	render(){
		// var {userState, singleMyCourse} = this.props;
		var { userState } = this.props;
		var singleMyCourse = {
			fee:0,
			courseStatus:0,
			deleted:0,
			cid:23,
			uid:16,
			title:'wojiayige xinde dongx',
			cCategory:1,
			createdDate:'2018-02-17T09:00:17.000Z',
			courseType:null,
			subTitle:null,
			description:null,
			cLanguage:null,
			cLevel:null,
			cImage:null,
			promoVideo:null,
			feeType:null,
			caption:null,
			welcomeMessage:null,
			congratulationMessage:null,
			courseTags:null,
		};


		if (userState.isLoggedin && !isObjectEmpty(singleMyCourse)) {
			return (
				<div className="edit-course-page">
					<Container>
						<Row className="edit-course-page-header">
							<Col xs="12" sm="3">
								<div >
									<img src={singleMyCourse.cImage? 
										singleMyCourse.cImage : config.singleMyCourseImagePlaceHolder} />
								</div>
							</Col>
							<Col xs="12" sm="9">
								<h1>{singleMyCourse.title}</h1>
								<p>{userState.firstName + ' ' + userState.lastName}</p>
								<p>{singleMyCourse.courseStatus ? string.Published : string.Draft }</p>
							</Col>
						</Row>
						<Row>
							<Col xs="12" sm="3">
								<div className="multi-col-menu">
									<ul className="side-menu">
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.EditCourse + '/' + singleMyCourse.cid + pagePath.EditCourseGoal}>{string.EditCourseGoal}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.EditCourse + '/' + singleMyCourse.cid + pagePath.EditCoursePractice}>{string.EditCoursePractice}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.EditCourse + '/' + singleMyCourse.cid + pagePath.EditCourseLanding}>{string.EditCourseLanding}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.EditCourse + '/' + singleMyCourse.cid + pagePath.EditCoursePrice}>{string.EditCoursePrice}</Link>
										</li>
										<li className="side-menu-item">
											<Link activeClassName="active" to={pagePath.EditCourse + '/' + singleMyCourse.cid + pagePath.EditCourseMessage}>{string.EditCourseMessage}</Link>
										</li>
									</ul>
								</div>
							</Col>
							<Col xs="12" sm="9">
								{this.props.children}
							</Col>
						</Row>
					</Container>
				</div>
			);
		} else {
			return (<NotFoundPage />);
		}
	}
}

export default EditCoursePage;