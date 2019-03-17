import React, { Component } from 'react';
import {
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
	Button
} from 'reactstrap';
import string from '../../String';
import pagePath from '../../pagePath';
import NoPermissionPage from './NoPermissionPage';
import resourcePath from '../../resourcePath';
import validator from 'validator';
import isObjectEmpty from '../../helper/isObjectEmpty';

class AddNewCoursePage extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			errorTitle:'',
			redirect: false
		};
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		
	}

	componentWillReceiveProps() {
		var { user, singleMyCourse } = this.props;
		if (user.isLoggedin && !isObjectEmpty(singleMyCourse)) {
			this.props.router.replace(pagePath.EditCourse + '/' + singleMyCourse.cid);
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(){
		if (this.state.title == '') {
			this.setState({
				errorTitle: string.ErrorTitleCannotBeEmpty
			});
		} else {
			this.setState({errorTitle: ''});
			this.props.createNewCourseTitleCall({title: validator.escape(this.state.title)});
		}
	}

	render(){
		var { user } = this.props;
		if (user.isLoggedin) {
			return (
				<div className="add-new-course-page">
					<div className="small-container">
						<Form>
							<FormGroup>
								<Label>{string.TypeYourCourseName}</Label>
								<Input 
									type="text" 
									name="title"
									value={this.state.title}
									onChange={this.onChange}
								/>
								<FormFeedback>{this.state.errorTitle}</FormFeedback>
							</FormGroup>
							<FormFeedback>{this.props.ui.apiCallType == resourcePath.addCourse && this.props.ui.serverErrorMessage}</FormFeedback>
							<FormGroup>
								<Button onClick={() => this.onSubmit()}>{string.Submit}</Button>
							</FormGroup>
						</Form>
					</div>
				</div>
			);
		} else {
			return (<NoPermissionPage />);
		}
	}
}

export default AddNewCoursePage;