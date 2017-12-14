import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import string from "../../../String"
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const IMAGE_WIDTH = 100;
const IMAGE_HEIGHT = 100;

class AccountPhotoPage extends Component{
	constructor(props){
		super(props);
		this.state ={
			file:"",
			errorFile:"",
			croppedImage: "",
			showCropper: false
		}

		this.submit = this.submit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.imageOnLoad = this.imageOnLoad.bind(this);
	}
	
	componentWillMount(){
		this.setState({file: this.props.userState.photo});
	}

	componentWillUnmount(){
		this.setState({file: this.props.userState.photo});		
	}

	onChange(e){
		// check the file type
		// if they are image, push it to the cropper
		if (e.target.files && e.target.files[0]){
			if (e.target.files[0].name.indexOf(".png") != -1 || 
				e.target.files[0].name.indexOf(".jpg") != -1 ||
				e.target.files[0].name.indexOf(".jpeg") != -1 )
			{
				this.setState({showCropper: true, errorFile : ""});
				var fileReader = new FileReader();
				fileReader.onload = (event) => {
					this.setState({file: event.target.result ,errorFile : ""});
				}
				fileReader.readAsDataURL(e.target.files[0]);
			} else {
				this.setState({errorFile : string.PhotoWrongFormat, showCropper: false});
			}
		}
	}

	crop(){
		this.setState({croppedImage: this.refs.cropper.getCroppedCanvas().toDataURL() });
	}

	submit(){
		if ((!!this.state.file) && 
			this.state.errorFile == "" && 
			this.state.croppedImage != "")
		{
			// api call will only triggered when the image cache is loaded
			this.refs.imageCache.src = this.state.croppedImage;
		} else if (!this.state.file){
			this.setState({errorFile: string.ChooseYourFile});
		}
	}

	imageOnLoad(){
		this.refs.canvas.getContext('2d').drawImage(this.refs.imageCache, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
		var user = this.props.userState;		
		this.props.updatePhotoCall({
			"picture": this.refs.canvas.toDataURL()
		},{
			"x-user-id": user.uid,
			"x-access-token": user.token
		});
	}

    render(){
	    return (
	    	<div className="account-photo-page">
				<div className="account-page-header">
					<h1>{string.AccountPhoto}</h1>
					<p>{string.AccountPhotoSubheading}</p>
				</div>
				<div className="cropper-wrapper">
					<div className={this.state.showCropper ? "hidden" : "photo-preview"}>
						<span>{string.ImagePreview} </span>
					</div>
					<Cropper
						ref='cropper'
						src={this.state.file}
						style={{padding:"0.5em 0", height: '12em', width:'100%' ,}}
						aspectRatio={1 / 1}
						guides={false}
						background={false}
						zoomable={false}
						crop={this.crop.bind(this)} 
					/>
				</div>
				<Form>
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
					<Button onClick={() => this.submit()}>{string.Submit}</Button>
				</Form>

				{/* use for drawing and getting the resized image only */}
				{/* not for display */}
				<canvas className="hidden" ref="canvas" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>
				<img className="hidden" onLoad={this.imageOnLoad} ref="imageCache"/>

	    	</div>
	    )
  	}
}

export default AccountPhotoPage;