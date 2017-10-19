import axios from "axios";
import { ShowErrorDialog } from "./uiAction";
import string from "../String"
import config from "../config"
import {getStoredState} from 'redux-persist'

export const InitApp = () => {
	// 1. check localstorage, get user info
	// 2.1. if user exist, use user lanuage and location.
	// 2.2 if no user exist , hit the server and get location and language.
	// 3. based on user info, load search options.
	// 4. contine on with loading page.
	return {
		type: "NOTHING_HERE"
	}
}


