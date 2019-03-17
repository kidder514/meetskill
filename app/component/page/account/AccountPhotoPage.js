import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import string from '../../../String';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import NoPermissionPage from '../NoPermissionPage';
import resourcePath from '../../../resourcePath';
import LoadingSectionSpinner from '../../../helper/uicomponent/LoadingSectionSpinner';
import isObjectEmpty from '../../../helper/isObjectEmpty';

class AccountPhotoPage extends Component{
	constructor(props){
		super(props);
		this.state ={
			file:'',
			errorFile:'',
			showCropper: false,
			coordinate: {},
			timerOn: false
		};

		this.submit = this.submit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.renderButton = this.renderButton.bind(this);
	}
    
	componentWillMount(){
		this.setState({file: this.props.userState.photo});
	}

	componentWillUnmount(){
		this.setState({file: this.props.userState.photo});      
	}

	onChange(e){
		if (e.target.files && e.target.files[0]){
			if (e.target.files[0].name.indexOf('.png') != -1 || 
                e.target.files[0].name.indexOf('.jpg') != -1 ||
                e.target.files[0].name.indexOf('.jpeg') != -1 )
			{
				this.setState({showCropper: true, errorFile : ''});
				var fileReader = new FileReader();
				fileReader.onload = (event) => {
					this.setState({file: event.target.result ,errorFile : ''});
				};
				fileReader.readAsDataURL(e.target.files[0]);
			} else {
				this.setState({errorFile : string.PhotoWrongFormat, showCropper: false});
			}
		}
	}

	cropend(){
		const cropBoxData = this.refs.cropper.getCropBoxData();
		this.setState({coordinate: {
			'x1' : cropBoxData.left,
			'y1' : cropBoxData.top,
			'x2' : cropBoxData.left + cropBoxData.width,
			'y2' : cropBoxData.top + cropBoxData.height
		}});
	}

	submit(){
		if ((!!this.state.file) && 
            this.state.errorFile == '' && 
            !isObjectEmpty(this.state.coordinate))
		{
			const coordinate = this.state.coordinate;
			this.props.updatePhotoCall({
				'picture': this.state.file,
				'crop': '{’x1’:' + coordinate.x1 + ',’y1’:' + coordinate.y1 + ',' + 
						'’x2’:'+ coordinate.x2  + ',’y2’:' + coordinate.y2  +'}'
			});

		} else if (!this.state.file){
			this.setState({errorFile: string.ChooseYourFile});
		}
	}

	renderButton(){	
		if (this.props.ui.apiCalling && (this.props.ui.apiCallType == resourcePath.updatePhoto)) {
			return ([
				<Button key='submit-button' onClick={() => this.submit()} disabled>{string.Submit}</Button>,
				<LoadingSectionSpinner key='loading-spinner'/>
			]);
		}

		return (<Button onClick={() => this.submit()}>{string.Submit}</Button>);
	}

	render(){
		if (this.props.userState.isLoggedin){
			return (
				<div className="account-photo-page">
					<div className="account-page-header">
						<h3>{string.AccountPhoto}</h3>
						<p>{string.AccountPhotoSubheading}</p>
					</div>
					<Form className="multi-col-menu-form">
						<div className="cropper-wrapper">
							<div className={this.state.showCropper ? 'hidden' : 'photo-preview'}>
								<span>{string.ImagePreview} </span>
							</div>
							<Cropper
								ref='cropper'
								src={this.state.file}
								style={{padding:'0.5em 0', height: '12em', width:'100%' ,}}
								aspectRatio={1 / 1}
								guides={false}
								background={false}
								zoomable={false}
								cropend={this.cropend.bind(this)} 
							/>
						</div>
						<FormGroup>
							<Label for="photoUpload" >{string.UploadYourPhoto}</Label>
							<Input 
								type="file" 
								name="file" 
								id="photoUpload"
								onChange={this.onChange}
							/>
							<FormFeedback>{this.state.errorFile}</FormFeedback>
							<FormText>{string.PhotoWarning}</FormText>
						</FormGroup>
						<FormFeedback>{this.props.ui.apiCallType == resourcePath.updatePhoto && this.props.ui.serverErrorMessage}</FormFeedback>
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

export default AccountPhotoPage;