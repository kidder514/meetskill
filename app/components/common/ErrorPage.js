import React, {Component} from 'react';
import Dialog from '../../uicomponent/component/Dialog';

class ErrorPage extends Component {

	constructor(props){
		super(props)
		
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
	}

	handleOpen(msg) {
		this.props.popupError(this.props.error)
	}

	handleClose(){
		this.props.popupError("")
	}

	render() {

	    return (
	        <Dialog
	          	title="Ooooops."
	          	msg={this.props.error}
	          	open={this.props.error != ""}
	          	onRequestClose={this.handleClose}
	        />
	    )
	}
}


export default ErrorPage;
