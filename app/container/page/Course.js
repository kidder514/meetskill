import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadCourseCall} from "../../action/dataAction"
import CoursePage from "../../component/page/CoursePage"

const mapStateToProps = (state) => {
	return {
        userState: state.userState,
        course: state.data.course
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCourse: (id) => {dispatch(loadCourseCall(id))},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
