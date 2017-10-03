import React, {Component} from 'react';

class Avatar extends Component {

 	render() {
 		var props = this.props;
	    return (
    		<img src={props.src} alt={props.alt} className={this.props.className ? this.props.className + " avatar img-circle" : "avatar img-circle" } style={props.style} onClick={props.onClick} />
	    );
 	}
}

export default Avatar;
