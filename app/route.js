import React from "react"
import {Route, IndexRoute} from "react-router"
import Outter from "./container/Outter"
import Wrapper from "./component/Wrapper"
import Home from "./container/page/Home"
import FullCategory from "./container/page/FullCategory"
import Category from "./container/page/Category"
import SingleCourse from "./container/page/SingleCourse"
import MyCourse from "./container/page/MyCourse"
import Account from "./container/page/Account"
import Author from "./container/page/Author"
import AccountPurchaseHistory from "./container/page/AccountPurchaseHistory"
import Help from "./container/page/Help"
import Inbox from "./container/page/Inbox"
import AccountViewPublicProfile from "./container/page/account/AccountViewPublicProfile"
import AccountProfile from "./container/page/account/AccountProfile"
import AccountAccount from "./container/page/account/AccountAccount"
import AccountPayment from "./container/page/account/AccountPayment"
import AccountPreference from "./container/page/account/AccountPreference"
import ShoppingCart from "./container/page/ShoppingCart"
import Notification from "./container/page/Notification"
import InstructorDashboard from "./container/page/InstructorDashboard"
import ResetPassword from "./container/page/ResetPassword"
import NotFoundPage from "./component/page/NotFoundPage"
import pagePath from "./pagePath";

export default (
	<Route component={Outter}>
		<Route component={Wrapper}>
			<IndexRoute component={Home} />
			<Route path={pagePath.Home} component={Home} />
			<Route path={pagePath.Category}>
				<IndexRoute component={FullCategory} />
				<Route path={"*"} component={Category} />
			</Route>
			<Route path={pagePath.Account} component={Account}>
				<IndexRoute component={AccountProfile} />
				<Route path={pagePath.Account + pagePath.Profile} component={AccountProfile} />				
				<Route path={pagePath.Account + pagePath.ViewPublicProfile} component={AccountViewPublicProfile} />
				<Route path={pagePath.Account + pagePath.Account} component={AccountAccount} />
				<Route path={pagePath.Account + pagePath.Payment} component={AccountPayment} />
				<Route path={pagePath.Account + pagePath.PurchaseHistory} component={AccountPurchaseHistory} />				
				<Route path={pagePath.Account + pagePath.Preference} component={AccountPreference} />
			</Route>				
			<Route path={pagePath.ShoppingCart} component={ShoppingCart} />
			<Route path={pagePath.Notification} component={Notification} />
			<Route path={pagePath.InstructorDashboard} component={InstructorDashboard} />
			<Route path={pagePath.ResetPassword} component={ResetPassword} />
			<Route path={pagePath.SingleCourse + "/:id"} component={SingleCourse} />
			<Route path={pagePath.Mycourses} component={MyCourse} />
			<Route path={pagePath.Author + "/:id"} component={Author} />
			<Route path={pagePath.Inbox} component={Inbox} />
			<Route path={pagePath.Help} component={Help} />
			<Route path="*" component={NotFoundPage}/>
		</Route>
	</Route>
)
