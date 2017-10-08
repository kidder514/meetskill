import React, {Component} from 'react';
import LoadingSpinner from '../../helpers/uicomponent/LoadingSpinner'

class HomePage extends Component{
	constructor(props){
		super(props);
	}

  	render(){
  		return (
  			<div>
  				This is home page
  				<div>
  					<LoadingSpinner />
  				</div>
  			</div>
  		);
  	}
  		
}

export default HomePage;
