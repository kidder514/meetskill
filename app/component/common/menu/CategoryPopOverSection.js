import React, {Component} from 'react';
import {Link} from "react-router";
import IconButton from "../../../helper/uicomponent/IconButton";
import string from "../../../String"
import LoadingSpinner from "../../../helper/uicomponent/LoadingSpinner";
import pagePath from "../../../pagePath"

class CategoryPopOverSection extends Component {
	constructor(props) {
		super(props);
		this.renderCategory = this.renderCategory.bind(this);
	}
	
	renderCategory(categories, parentPath){
		return (
			<ul className={parentPath == pagePath.Category ? "" : "subcategory"}>
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

    render() {
		if( this.props.category.length <= 0){
			return <LoadingSpinner />;
		} else {
			return (
			<div>
				{this.renderCategory(this.props.category, pagePath.Category)}
			</div>
			)
		}
    }
}

export default CategoryPopOverSection;
