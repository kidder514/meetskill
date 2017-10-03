import React, {Component} from 'react';
import {connect} from "react-redux";
import ImgLayerPage from "../../components/common/ImgLayerPage";
import {openImgLayer,closeImgLayer} from "../../action/SingleDishAction"

const mapStateToProps = (state) => {
	return {
		imgs:state.ui.imgs,
		imgIndex:state.ui.imgIndex,
		imgLayerIsOpen:state.ui.imgLayerIsOpen,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openImgLayer: (imgs,imgIndex) =>{
			dispatch(openImgLayer(imgs,imgIndex));
		},
		closeImgLayer: () =>{
			dispatch(closeImgLayer());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgLayerPage);

