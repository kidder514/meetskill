import React, {Component} from 'react';
import Menu from "../containers/Menu";
import UserMenu from "../containers/UserMenu"

class Wrapper extends Component {

  	render(){
	    return (
	        <div className="wrapper">
	            <Menu />
	            <UserMenu />
	            {this.props.children}
	        </div>
	    )
  	}
}

export default Wrapper;