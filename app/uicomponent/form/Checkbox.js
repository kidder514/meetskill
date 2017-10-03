import React, {Component} from 'react';

class Checkbox extends Component {

	render() {		
	    return (
	    	<input type="checkbox" onClick={this.props.onClick} />
	    )
	}
}

export default Checkbox;
