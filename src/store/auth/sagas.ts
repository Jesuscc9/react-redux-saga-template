import { takeLatest, call, put } from "redux-saga/effects";
import { sagaWrapper } from "../../helpers";
import { ActionType, ResponseType } from "../../types";
import { AUTH_TYPES } from "./types";
import { AuthService } from "../../services";
import { authActions } from "../auth/actions";
import { history } from "../../App";
import { Service } from "../../services"
import cookies from "js-cookie"
import moment from "moment";

const authService = new AuthService();
const userService = new Service("patients");

function* login({ payload }: ActionType) {
	const response: ResponseType = yield call(authService.login, payload);
	yield cookies.set('auth', response.data?.accessToken, {
		expires: moment().add(2, 'hours').utc().toDate(),
	});
	yield put(authActions.setData(response.data));
}

function* me() {
	// Fetch user data
	const response: ResponseType = yield call(userService.me);
	yield put(authActions.setData(response));
}

function* logout() {
	yield cookies.remove("auth");
	yield history.push("/");
}

export function* authSagas() {
	yield takeLatest(AUTH_TYPES.LOGIN, sagaWrapper(login));
	yield takeLatest(AUTH_TYPES.ME, sagaWrapper(me));
	yield takeLatest(AUTH_TYPES.LOGOUT, logout);
}