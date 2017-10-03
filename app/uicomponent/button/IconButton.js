import React, {Component} from 'react';

class IconButton extends Component {

 	render() {
 		var props = this.props;

	    return (
    		<button type="button" className="icon-button" onClick={props.onClick}>
				<i className="material-icons">{props.icon}</i>
				<span className="button-text">{props.text != undefined ? props.text : ""}</span>
			</button>
	    );
 	}
}

export default IconButton;
