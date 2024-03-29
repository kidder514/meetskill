import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Outter from './container/Outter';
import Wrapper from './component/Wrapper';
import Home from './container/page/Home';
import FullCategory from './container/page/FullCategory';
import Category from './container/page/Category';
import SingleCourse from './container/page/SingleCourse';
import MyCourse from './container/page/MyCourse';
import Account from './container/page/Account';
import Author from './container/page/Author';
import AccountPurchaseHistory from './container/page/account/AccountPurchaseHistory';
import Help from './container/page/Help';
import Inbox from './container/page/Inbox';
import AccountViewPublicProfile from './container/page/account/AccountViewPublicProfile';
import AccountPhoto from './container/page/account/AccountPhoto';
import AccountProfile from './container/page/account/AccountProfile';
import AccountAccount from './container/page/account/AccountAccount';
import AccountSetting from './container/page/account/AccountSetting';
import AccountDeleteAccount from './container/page/account/AccountDeleteAccount';
import ShoppingCart from './container/page/ShoppingCart';
import Notification from './container/page/Notification';
import InstructorDashboard from './container/page/InstructorDashboard';
import AddNewCourse from './container/page/AddNewCourse';
import EditCourse from './container/page/editCourse/EditCourse';
import EditCourseGoal from './container/page/editCourse/EditCourseGoal';
import EditCoursePractice from './container/page/editCourse/EditCoursePractice';
import EditCourseLanding from './container/page/editCourse/EditCourseLanding';
import EditCoursePrice from './container/page/editCourse/EditCoursePrice';
import EditCourseMessage from './container/page/editCourse/EditCourseMessage';
import RecoverPassword from './container/page/RecoverPassword';
import Logout from './container/Logout';
import NotFoundPage from './component/page/NotFoundPage';
import pagePath from './pagePath';

export default (
	<Route component={Outter}>
		<Route component={Wrapper}>
			<IndexRoute component={Home} />
			<Route path={pagePath.Home} component={Home} />
			<Route path={pagePath.Category}>
				<IndexRoute component={FullCategory} />
				<Route path={'*'} component={Category} />
			</Route>
			<Route path={pagePath.Account} component={Account}>
				<IndexRoute component={AccountViewPublicProfile} />
				<Route path={pagePath.Account + pagePath.ViewPublicProfile} component={AccountViewPublicProfile} />
				<Route path={pagePath.Account + pagePath.Profile} component={AccountProfile} />             
				<Route path={pagePath.Account + pagePath.Photo} component={AccountPhoto} />             
				<Route path={pagePath.Account + pagePath.Account} component={AccountAccount} />
				<Route path={pagePath.Account + pagePath.Setting} component={AccountSetting} />
				<Route path={pagePath.Account + pagePath.PurchaseHistory} component={AccountPurchaseHistory} />             
				<Route path={pagePath.Account + pagePath.DeleteAccount} component={AccountDeleteAccount} />
			</Route>
			<Route path={pagePath.EditCourse + '/:courseId'} component={EditCourse}>
				<IndexRoute component={EditCourseGoal} />
				<Route path={pagePath.EditCourse + '/:courseId' + pagePath.EditCourseGoal} component={EditCourseGoal} />
				<Route path={pagePath.EditCourse + '/:courseId' + pagePath.EditCoursePractice} component={EditCoursePractice} />             
				<Route path={pagePath.EditCourse + '/:courseId' + pagePath.EditCourseLanding} component={EditCourseLanding} />             
				<Route path={pagePath.EditCourse + '/:courseId' + pagePath.EditCoursePrice} component={EditCoursePrice} />
				<Route path={pagePath.EditCourse + '/:courseId' + pagePath.EditCourseMessage} component={EditCourseMessage} />
			</Route>            
			<Route path={pagePath.ShoppingCart} component={ShoppingCart} />
			<Route path={pagePath.Notification} component={Notification} />
			<Route path={pagePath.InstructorDashboard} component={InstructorDashboard} />
			<Route path={pagePath.AddNewCourse} component={AddNewCourse} />								
			<Route path={pagePath.ChangePassword} component={RecoverPassword} />
			<Route path={pagePath.SingleCourse + '/:id'} component={SingleCourse} />
			<Route path={pagePath.Mycourses} component={MyCourse} />
			<Route path={pagePath.Author + '/:id'} component={Author} />
			<Route path={pagePath.Inbox} component={Inbox} />
			<Route path={pagePath.Help} component={Help} />
			<Route path={pagePath.Logout} component={Logout} />
			<Route path="*" component={NotFoundPage}/>
		</Route>
	</Route>
);
