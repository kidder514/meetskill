import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideErrorDialog } from '../../action/uiAction';
import ErrorSection from '../../component/common/ErrorSection';
import IconButton from  './IconButton';

class ErrorDialogBox extends Component{
	constructor(props){
		super(props);
	}   
    
	render(){
		return (
			<div className={'error-dialog-box-Wrapper ' + (this.props.isShown ? '':'hidden')}>
				<div className="error-dialog-box">
					<IconButton 
						className="text-right close-icon" 
						icon="highlight_off" 
						onClick={this.props.hide}
					/>
					<ErrorSection errorMessage={this.props.errorMessage} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isShown: state.ui.showErrorDialogBox,
		errorMessage: state.ui.errorMessage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		hide: () => {dispatch(hideErrorDialog());}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorDialogBox);