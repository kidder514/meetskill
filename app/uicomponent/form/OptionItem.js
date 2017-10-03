import React, {Component} from 'react';

class OptionItem extends Component {

 	render() {
 		var props = this.props;

	    return (
    		<option
    		    className={props.className ? props.className : "option-item-input " + props.className}
    		    style={props.style ? props.style : {}}
    		    label={props.label ? props.label : ""}
    		    value={props.value ? props.value : ""}
    		>
    		</option>
	    );
 	}
}


export default OptionItem;
