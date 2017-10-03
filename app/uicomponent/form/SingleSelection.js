import React, {Component} from 'react';

class SingleSelection extends Component {

 	render() {
 		var props = this.props;

	    return (
	    	<div className={props.className ? "single-selection-wrapper " + props.className : "single-selection-wrapper"}>
	    		<select
	    			id={props.id ? props.id : ""}
	    		    className="single-selection-input form-control col-xs-9"
	    		    ref={this.ref ? this.ref : ""}
	    		    style={props.style ? props.style : {}}
	    			name={props.name ? props.name : ""}
	    			width={props.width ? props.width : ""}
	    			onChange={props.onChange ? props.onChange : ""}
	    			onFocus={props.onFocus ? props.onFocus : ""}
	    		    value={props.value}
	    		>
	    			{props.children}
	    		</select>	
	    		<p className="single-selection-error-text">{props.errorText ? props.errorText : ""}</p>
	    	</div>
	    );
 	}
}


export default SingleSelection;
