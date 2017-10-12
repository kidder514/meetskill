import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helper/uicomponent/IconButton";
import string from "../../../String"
import LoadingSpinner from "../../../helper/uicomponent/LoadingSpinner";

class CategoryPopOverSection extends Component {
	constructor(props) {
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
	}
	
	renderComponent(){
		return (<div>CategoryPopOverSection</div>);
	}

    render() {
		if( this.props.category.length <= 0){
			return <LoadingSpinner />;
		} else {
			return (this.renderComponent());
		}
    }
}

export default CategoryPopOverSection;
