import { call, put } from "redux-saga/effects";
import { authActions } from "../store/auth/actions";
import Cookies from "js-cookie";

/*  SAFE SAGA CALL FOR ERROR HANDLING */
export function sagaWrapper(sagaFn: any, errorAction?: any) {
  return function* (): any {
    try {

      return yield call(sagaFn, arguments[0]);

    } catch (error: any) {
      console.log("Error:", error)

      if (error.response?.status === 401 && Cookies.get('auth')) {
        yield Cookies.remove('auth', {
          path: '/',
          domain: window.location.hostname
        })
      }

      if (error.response) {
        if (error.response.status === 401 || error.response.status === 403) {
          yield put(authActions.logout());
          //Show error to user
        } else {
        }
      }

      if (error.message === "Network Error") {
        // Show error to user
      }

      if (errorAction && error.message !== "Operation canceled") {
        yield put(errorAction)
      }
    }
  }
}