import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap"
import pagePath from "../../pagePath"
import { Link } from "react-router"
import { DrawStar } from "../../helper/uicomponent/DrawStar"
import { formatNumber } from "../../helper/formatNumber"
import ListPagination from "../../helper/uicomponent/ListPagination"

class ItemListSection extends Component{

    render(){
	    return (
	    	<Container className="item-list">
				<Row>
				{this.props.items.map((item, index)=>{		
					return (
						<Col key={item.id} className="item" xs="12" sm="6" md="4" lg="3" xl="2">
							<div className="item-inner">
								<Link className="item-image" to={pagePath.SingleCourse + item.url}>
									<img src={item.image_240x135}/>
								</Link>

								<div className="item-info-wrapper">
									<h6 className="item-title" title={item.title} >
										<Link to={pagePath.SingleCourse + item.url}>
											{item.title}
										</Link>
									</h6>
									<Link to={pagePath.Author + item.visible_instructors[0].url} className="item-author">
										{item.visible_instructors[0].display_name}
									</Link>
									{DrawStar(item.avg_rating, item.num_reviews)}
									<span>{Number((item.avg_rating).toFixed(1))} </span><span className="review-nums">({formatNumber(item.num_reviews)})</span>
									<span className="item-price">{item.price}</span>
								</div>
							</div>
						</Col>
					)
				})}
				</Row>
				<div className="pagination-wrapper">
					<ListPagination currentPage={1} totalPages={60} />
				</div>
	    	</Container>
	    )
  	}
}

export default ItemListSection;