import React, {Component} from 'react';

class RefreshIndicator extends Component {

 	render() {

	    return (
	    	<div className="centerbox-outter-wrapper" style={this.props.open ? {display:"block"} : {display:"none"}}>
		    	<div className="centerbox-wrapper spinner">
			    	<div className="centerbox clearfix spinner">
			    		<i className="material-icons spinner">autorenew</i>
			    	</div>
		    	</div>
	    	</div>
	    );
 	}
}

export default RefreshIndicator;
