import React, { Component } from 'react';
import { 
	Button, 
	Form, 
	FormGroup,
	Label,
	Input, 
	FormText, 
	InputGroup,
	InputGroupAddon,
	FormFeedback
} from 'reactstrap';
import string from '../../../String';
import validator from 'validator';
import NoPermissionPage from '../NoPermissionPage';
import resourcePath from '../../../resourcePath';
import LoadingSectionSpinner from '../../../helper/uicomponent/LoadingSectionSpinner';

const MAX_HEADLINE_CHAR = 60;
const MAX_BIOGRAPHY_CHAR = 250;

class AccountProfilePage extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			errorFirstName:'',
			lastName:'',
			errorLastName:'',
			headline:'',
			errorHeadline:'',
			headlineCount: MAX_HEADLINE_CHAR,
			biography:'',
			biographyCount: MAX_BIOGRAPHY_CHAR,
			errorBiography:'',
			language:'',
			errorLanguage:'',
			link: '',
			errorLink:'',
			google:'',
			errorGoogle:'',
			facebook:'',
			errorFacebook:'',
			twitter:'',
			errorTwitter:'',
			linkedin:'',
			errorLinkedin:'',
			youtube:'',
			errorYoutube:''
		};

		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);
		this.sanitizer = this.sanitizer.bind(this); 
		this.renderButton = this.renderButton.bind(this);
	}

	componentWillMount(){
		this.setState(this.props.userState);
	}

	componentWillUnmount(){
		this.setState(this.props.userState);        
	}

	sanitizer(string){
		if (string == null || string == ''){
			return '';
		} else {
			return validator.escape(string);
		}
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
        
		if (e.target.name == 'headline'){
			this.setState({headlineCount: MAX_HEADLINE_CHAR - e.target.value.length});
		}

		if (e.target.name == 'biography'){
			this.setState({biographyCount: MAX_BIOGRAPHY_CHAR - e.target.value.length});
		}
	}

	submit(){
		var stateCache = {};
		var errorCache = {};
		var isValid = true;
		if (this.state.firstName == '' || this.state.firstName == null){
			errorCache.errorFirstName = string.NoFirstName;
			isValid = false;
		} else if (!validator.isAlpha(this.state.firstName)) {
			errorCache.errorFirstName = string.ErrorNameFormat;
			isValid = false;
		} else {
			errorCache.errorFirstName = '';
			stateCache.firstName = this.state.firstName;
		}

		if (this.state.lastName == '' || this.state.lastName == null){
			errorCache.errorLastName = string.NoLastName;       
			isValid = false;
		} else if (!validator.isAlpha(this.state.lastName)) {
			errorCache.errorLastName = string.ErrorNameFormat;      
			isValid = false;            
		} else {
			errorCache.errorLastName = '';
			stateCache.lastName = this.state.lastName;
		}

		if (this.state.headline == '' || 
            this.state.headline == null ||
            this.state.headline.length <= MAX_HEADLINE_CHAR)
		{
			errorCache.errorHeadline = '';
			stateCache.headline = this.sanitizer(this.state.headline);
		} else {
			errorCache.errorHeadline = string.ExceedLengthLimit;
			isValid = false;
		}

		if (this.state.biography == '' || 
            this.state.biography == null ||
            this.state.biography.length <= MAX_BIOGRAPHY_CHAR)
		{       
			errorCache.errorBiography = '';
			stateCache.biography = this.sanitizer(this.state.biography);
		} else {
			errorCache.errorBiography = string.ExceedLengthLimit;
			isValid = false;
		}

		if (this.state.language != '' && this.state.language != null){
			stateCache.language = this.sanitizer(this.state.language);
		}

		if (this.state.link == '' || 
            this.state.link == null || 
            validator.isURL(this.state.link, {allow_underscores: true}))
		{
			errorCache.errorLink = '';
			stateCache.link = this.sanitizer(this.state.link);
		} else {
			errorCache.errorLink = string.WebsiteWrongFormat;
			isValid = false;
		}

		stateCache.google = this.sanitizer(this.state.google);
		stateCache.facebook = this.sanitizer(this.state.facebook);
		stateCache.twitter = this.sanitizer(this.state.twitter);
		stateCache.linkedin = this.sanitizer(this.state.linkedin);
		stateCache.youtube = this.sanitizer(this.state.youtube);
		stateCache.language = this.props.userState.language;
		stateCache.showProfile = this.props.userState.showProfile;
		stateCache.showCourse = this.props.userState.showCourse;
		stateCache.emailNotification = this.props.userState.emailNotification;
        
		if (isValid){
			this.setState(errorCache, 
				this.props.updateProfileCall({'data' : stateCache}, {
					'x-user-id': this.props.userState.uid,
					'x-access-token': this.props.userState.token
				})
			);          
		} else {
			this.setState(errorCache);          
		}
	}

	renderButton(){	
		if (this.props.ui.apiCalling && (this.props.ui.apiCallType == resourcePath.updateProfile)) {
			return ([
				<Button key='submit-button' onClick={() => this.submit()} disabled>{string.Submit}</Button>,
				<LoadingSectionSpinner key='loading-spinner'/>
			]);
		}

		return (<Button onClick={() => this.submit()}>{string.Submit}</Button>);
	}

	render(){
		if (this.props.userState.isLoggedin) {
			return (
				<div className="account-profile-page">
					<div className="account-page-header">
						<h3>{string.AccountProfile}</h3>
						<p>{string.AccountProfileSubheading}</p>
					</div>
	
					<Form className="account-form">
						<FormGroup>
							<Label for="firstName">{string.FirstName}</Label>
							<Input 
								type="text" 
								name="firstName" 
								value={this.state.firstName || ''}
								valid={this.state.errorFirstName == ''}
								onChange={this.onChange} 
								placeholder={string.InputYourFirstName} 
							/>
							<FormFeedback>{this.state.errorFirstName}</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="lastName">{string.LastName}</Label>
							<Input 
								type="text" 
								name="lastName" 
								value={this.state.lastName || ''} 
								valid={this.state.errorLastName == ''}
								onChange={this.onChange} 
								placeholder={string.InputYourLastName} 
							/>
							<FormFeedback>{this.state.errorLastName}</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="headline">{string.Headline}</Label>
							<InputGroup>
								<Input 
									type="textarea"
									name="headline"
									valid={this.state.errorHeadline == ''}
									value={this.state.headline || ''}
									onChange={this.onChange} 
									placeholder={string.InputYourHeadline} 
								/>
								<InputGroupAddon>{this.state.headlineCount}</InputGroupAddon>
							</InputGroup>
							<FormFeedback>{this.state.errorHeadline}</FormFeedback>
							<FormText>{string.HeadlineHint}</FormText>
						</FormGroup>
						<FormGroup>
							<Label for="biography">{string.Biography}</Label>
							<InputGroup>
								<Input
									type="textarea" 
									name="biography" 
									valid={this.state.errorBiography == ''}
									value={this.state.biography || ''}
									onChange={this.onChange} 
								/>
								<InputGroupAddon>{this.state.biographyCount}</InputGroupAddon>                          
							</InputGroup>
							<FormFeedback>{this.state.errorBiography}</FormFeedback>                                                                            
							<FormText>{string.BiographyHint}</FormText>                     
						</FormGroup>
						<FormGroup>
							<Label for="language">{string.Language}</Label>
							<Input 
								type="select" 
								name="language" 
								value={this.state.language || ''}
								onChange={this.onChange} 
								valid={this.state.errorLanguage == ''}
							>
								<option>{'English'}</option>
								<option>{'French'}</option>
								<option>{'Chinese'}</option>
								<option>{'Portuguese'}</option>
							</Input>
							<FormFeedback>{this.state.errorLanguage}</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="link">{string.Website}</Label>
							<Input 
								type="text"
								name="link" 
								valid={this.state.errorLink == ''}
								value={this.state.link || ''}
								onChange={this.onChange}
								placeholder={string.WebsiteHint}
							/>
							<FormFeedback>{this.state.errorLink}</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="google">{string.GooglePlus}</Label>
							<InputGroup>
								<InputGroupAddon>{string.GooglePlusUrl}</InputGroupAddon>                       
								<Input 
									type="text"
									name="google" 
									valid={this.state.errorGoogle == ''}
									value={this.state.google || ''}
									onChange={this.onChange}
									placeholder={string.GooglePlusHint}
								/>
							</InputGroup>
							<FormFeedback>{this.state.errorGoogle}</FormFeedback>                           
						</FormGroup>
						<FormGroup>
							<Label for="facebook">{string.Facebook}</Label>
							<InputGroup>
								<InputGroupAddon>{string.FacebookUrl}</InputGroupAddon>                     
								<Input 
									type="text"
									name="facebook" 
									valid={this.state.errorFacebook == ''}
									value={this.state.facebook || ''}
									onChange={this.onChange}
									placeholder={string.FacebookHint}
								/>
							</InputGroup>
							<FormFeedback>{this.state.errorFacebook}</FormFeedback>                     
						</FormGroup>
						<FormGroup>
							<Label for="twitter">{string.Twitter}</Label>
							<InputGroup>
								<InputGroupAddon>{string.TwitterUrl}</InputGroupAddon>                      
								<Input 
									type="text"
									name="twitter" 
									valid={this.state.errorTwitter == ''}
									value={this.state.twitter || ''}
									onChange={this.onChange}
									placeholder={string.TwitterHint}
								/>
							</InputGroup>
							<FormFeedback>{this.state.errorTwitter}</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="linkedin">{string.Linkedin}</Label>
							<InputGroup>
								<InputGroupAddon>{string.LinkedinUrl}</InputGroupAddon>                     
								<Input 
									type="text"
									name="linkedin" 
									valid={this.state.errorLinkedin == ''}
									value={this.state.linkedin || ''}
									onChange={this.onChange}
									placeholder={string.LinkedinHint}
								/>
							</InputGroup>
							<FormFeedback>{this.state.errorLinkedin}</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="youtube">{string.Youtube}</Label>
							<InputGroup>
								<InputGroupAddon>{string.YoutubeUrl}</InputGroupAddon>                      
								<Input 
									type="text"
									name="youtube" 
									valid={this.state.errorYoutube == ''}
									value={this.state.youtube || ''}
									onChange={this.onChange}
									placeholder={string.YoutubeHint}
								/>
							</InputGroup>
							<FormFeedback>{this.state.errorYoutube}</FormFeedback>
						</FormGroup>
						<FormFeedback>{this.props.ui.apiCallType == resourcePath.updateProfile && this.props.ui.serverErrorMessage}</FormFeedback>
					</Form>
					<FormGroup>
						{this.renderButton()}
					</FormGroup>
				</div>
			);
		} else {
			return (<NoPermissionPage />);
		}


	}
}

export default AccountProfilePage;