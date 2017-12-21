import React, { Component } from 'react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
} from 'reactstrap';
import string from '../../../String';

class AccountSettingPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			saveCard: false,
			showProfile: false,
			showCourse: false,
			emailNotification: false
		};

		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	componentWillMount(){
		this.setState({
			'saveCard': this.props.userState.saveCard,
			'showProfile': this.props.userState.showProfile,
			'showCourse': this.props.userState.showCourse,
			'emailNotification': this.props.userState.emailNotification
		});
	}

	componentWillUnmount(){
		this.setState({
			'data':{
				'saveCard': this.props.userState.saveCard,
				'showProfile': this.props.userState.showProfile,
				'showCourse': this.props.userState.showCourse,
				'emailNotification': this.props.userState.emailNotification
			}
		});     
	}

	onChange(e){
		this.setState({[e.target.name]: (e.target.checked ? 1 : 0)});
	}

	submit(){        
		this.props.changeSettingCall({
			'saveCard': this.state.saveCard,
			'showProfile': this.state.showProfile,
			'showCourse': this.state.showCourse,
			'emailNotification': this.state.emailNotification
		},{
			'x-user-id': this.props.userState.uid,
			'x-access-token': this.props.userState.token
		});
	}

	render(){
		return (
			<div className="account-setting-page">
				<div className="account-page-header">
					<h1>{string.AccountSetting}</h1>
					<p>{string.AccountSettingSubheading}</p>
				</div>
				<Form>
					<FormGroup check>
						<Label check>
							<Input
								name={'saveCard'}
								type="checkbox" 
								checked={!!this.state.saveCard}
								onChange={this.onChange}
							/>
							{' ' + string.SaveCardInfo}
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								name={'showProfile'}
								type="checkbox" 
								checked={!!this.state.showProfile}
								onChange={this.onChange}
							/>
							{' ' + string.ShowProfile}
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								name={'showCourse'}
								type="checkbox" 
								checked={!!this.state.showCourse}
								onChange={this.onChange}
							/>
							{' ' + string.ShowCourse}
						</Label>
					</FormGroup>
					<FormGroup check>
						<Label check>
							<Input
								name={'emailNotification'}
								type="checkbox" 
								checked={!!this.state.emailNotification}
								onChange={this.onChange}
							/>
							{' ' + string.ReceiveEmail}
						</Label>
					</FormGroup>
					<Button onClick={() => this.submit()}>{string.Submit}</Button>
				</Form>
			</div>
		);
	}
}

export default AccountSettingPage;