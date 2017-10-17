import React, { Component } from 'react';
import Filter from "../../container/section/Filter"
import ItemList from "../../container/section/ItemList"
import LoadingSpinner from "../../helper/uicomponent/LoadingSpinner"

class CategoryPage extends Component{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.cleanData();
	}

	componentDidMount(){
		if (this.props.data.length > 0){

		} else {
			this.props.loadData("");
		}
	}

    render(){
	    return (
	    	<div className="category-page">
	    		<Filter/>
				{this.props.data.length > 0 ? <ItemList items={this.props.data}/> : <LoadingSpinner />}
	    	</div>
	    )
  	}
}

export default CategoryPage;