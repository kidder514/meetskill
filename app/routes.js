import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"
import Home from "./containers/pages/Home"

export default (
	<Route component={OutterWrapper}>
		<Route component={Wrapper}>
			<Route path="/" component={Home} />
		</Route>
	</Route>
)
