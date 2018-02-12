import React, { Component } from 'react';
import Filter from '../../container/section/Filter';
import ItemList from '../../container/section/ItemList';
import LoadingSpinner from '../../helper/uicomponent/LoadingSpinner';

class CategoryPage extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
	}

	render(){
		return (
			<div className="category-page">
				<Filter/>
				{this.props.list.length > 0 ? <ItemList items={this.props.list}/> : <LoadingSpinner />}
			</div>
		);
	}
}

export default CategoryPage;