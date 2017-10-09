import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helpers/uicomponent/IconButton";
import strings from "../../../Strings"
import LoadingSpinner from "../../../helpers/uicomponent/LoadingSpinner";

class CategoryPopOverSection extends Component {
	constructor(props) {
		super(props);
		this.renderCategories = this.renderCategories.bind(this);
	}
	
	renderCategories(){
		return (<div></div>);
	}

    render() {
		if( this.props.categories.length <= 0){
			return <LoadingSpinner />;
		} else {
			return (this.renderCategories());
		}
    }
}

export default CategoryPopOverSection;
