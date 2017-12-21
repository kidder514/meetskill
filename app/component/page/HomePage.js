import React, {Component} from 'react';
import LoadingSpinner from '../../helper/uicomponent/LoadingSpinner';
import { Button } from 'reactstrap';

class HomePage extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<div>
					<LoadingSpinner />
					<Button>
                    category
					</Button>

				</div>
			</div>
		);
	}
        
}

export default HomePage;
