import React, {Component} from 'react';

class Modal extends Component {

	render() {
		// document.body.style.overflow = this.props.open ? "hidden" : "visible";
		
	    return (
	    	<div className="centerbox-outter-wrapper" style={this.props.open ? {display:"block"} : {display:"none"}}>
		    	<div className="centerbox-wrapper">
			    	<div className="centerbox clearfix">
						<button type="button" className="close pull-right" aria-label="Close" onClick={this.props.onRequestClose}>
			    			<span aria-hidden="true">&times;</span>
			    		</button>
			    		<h3>{this.props.title}</h3>
						{this.props.content}
			    		<hr />
			    	</div>
		    	</div>
	    	</div>
	    )
	}
}

export default Modal;
