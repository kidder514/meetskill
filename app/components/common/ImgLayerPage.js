import React, {Component} from 'react';
import {connect} from "react-redux";

class ImgLayerPage extends Component {
	constructor(props){
		super(props);

		this.handleArrowClick = this.handleArrowClick.bind(this);
		this.handleImageClick = this.handleImageClick.bind(this);
		this.handleCloseLayer = this.handleCloseLayer.bind(this);
	}

	handleArrowClick(e, imgs,changeImgIndex){
		e.stopPropagation();
 		let imgsLength = this.props.imgs.length;

		if(this.props.imgIndex + changeImgIndex == -1 ){
			this.props.openImgLayer(this.props.imgs,this.props.imgs.length - 1);
			return ;
		}

		if(this.props.imgIndex + changeImgIndex == this.props.imgs.length ){
			this.props.openImgLayer(this.props.imgs,0);
			return ;
		}

		this.props.openImgLayer(this.props.imgs,this.props.imgIndex + changeImgIndex);
	}

	handleImageClick(e){
		e.stopPropagation();
	}

	handleCloseLayer(){
		this.props.closeImgLayer();
	}

 	render() {
 		let imgLayerIsOpen = this.props.imgLayerIsOpen ? "" : "hidden";
 		let imgList = this.props.imgs;
 		let currentImgUrl = "";

 		if(imgList.length > 0){
 			currentImgUrl = imgList[this.props.imgIndex].origin;
 		}

	    return (
	    	<div className={"img-layer " + imgLayerIsOpen} onClick={() => this.handleCloseLayer()} >
	    			<span className="icon icon-arrow-left" onClick={(e) => this.handleArrowClick(e,imgList,-1)}>{'<'}</span>
	    			<div className="img-wrapper">
	    				<span></span>
	    				<img src={currentImgUrl} className="item-image" onClick={(e) => this.handleImageClick(e)}/>
	    			</div>
	    			<span className="icon icon-arrow-right" onClick={(e) => this.handleArrowClick(e,imgList,1)}>{'>'}</span>
	    	</div>
	    );
 	}
}


export default ImgLayerPage;
