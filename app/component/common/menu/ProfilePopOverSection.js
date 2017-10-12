import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helper/uicomponent/IconButton";
import strings from "../../../String"
import LoadingSpinner from "../../../helper/uicomponent/LoadingSpinner";

class ProfilePopOverSection extends Component {
	constructor(props) {
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}
	
	renderComponent(){
		return (<div>ProfilePopOverSection</div>);
	}

    render() {
		if( this.props.data.length <= 0){
			return <LoadingSpinner />;
		} else {
			return (this.renderComponent());
		}
    }
}

export default ProfilePopOverSection;
