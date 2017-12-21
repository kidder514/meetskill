import React, {Component} from 'react';

class IconButton extends Component{

	render(){
		return (
			<div className={this.props.className}>
				<i 
					className="material-icons" 
					onClick={this.props.onClick}>
					{this.props.icon}
				</i>
			</div>
		);
	}
        
}

export default IconButton;
