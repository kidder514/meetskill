import React, {Component} from 'react';
import Menu from "../containers/common/Menu"

class Wrapper extends Component {

  	render(){
	    return (
	        <div className="wrapper">
	            <Menu />
	            {this.props.children}
	        </div>
	    )
  	}
}

export default Wrapper;