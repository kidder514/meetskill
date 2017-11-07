import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helper/uicomponent/IconButton";
import string from "../../../String"
import LoadingSpinner from "../../../helper/uicomponent/LoadingSpinner";

class CategoryPopOverSection extends Component {
	constructor(props) {
		super(props);
		this.renderComponent = this.renderComponent.bind(this);
		this.renderCategory = this.renderCategory.bind(this);
	}
	
	renderCategory(categories, parentPath){
		return (
			<ul className={parentPath != "" ? "subcategory" : ""}>
				{categories.map((category)=>{
					if (!!category.subcategory){
						return (
							<li key={"key-" + category.name}>
								<Link to={parentPath + category.path}>
									{category.name}
									<span className="pull-right">></span>
								</Link>
								{ this.renderCategory(category.subcategory, category.path ) }
							</li>
						);
					} else{
						return (
							<li key={"key-" + category.name}>
								<Link to={parentPath + category.path}>
									{category.name}
								</Link>
							</li>
						);
					}
				})}
			</ul>
		);


	}

	renderComponent(){
		return (
			<div>
				{this.renderCategory(this.props.category, "")}
			</div>
		);
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
