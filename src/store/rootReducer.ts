import { combineReducers } from "redux";
import { authReducer } from "./auth/reducer";
import { alertsReducer } from "./alerts/reducer";

export const rootReducer = combineReducers({
	auth: authReducer,
	alerts: alertsReducer
});