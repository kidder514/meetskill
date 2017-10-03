import React, {Component} from 'react';

class Dialog extends Component {

	render() {
		document.body.style.overflow = this.props.open ? "hidden" : "visible";
		
	    return (
	    	<div className="centerbox-outter-wrapper" style={this.props.open ? {display:"block"} : {display:"none"}}>
		    	<div className="centerbox-wrapper">
			    	<div className="centerbox dialog clearfix">
						<button type="button" className="close pull-right" aria-label="Close" onClick={this.props.onRequestClose}>
			    			<span aria-hidden="true">&times;</span>
			    		</button>
			    		<h3>{this.props.title}</h3>
			    		<p>{this.props.msg}</p>
			    		<hr />
			    		<button className="btn btn-default pull-right" onClick={this.props.onRequestClose}>
			    			{this.props.buttonMsg ? this.props.buttonMsg : "OK"}
			    		</button>
			    	</div>
		    	</div>
	    	</div>
	    )
	}
}

export default Dialog;
