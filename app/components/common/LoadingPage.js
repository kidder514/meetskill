import React, {Component} from 'react';
import RefreshIndicator from "../../uicomponent/button/RefreshIndicator";

class LoadingPage extends Component {

 	render() {
	    return (
	        <RefreshIndicator open={this.props.loading} />
	    );
 	}
}


export default LoadingPage;
