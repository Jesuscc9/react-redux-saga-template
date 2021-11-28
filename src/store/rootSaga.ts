import { all } from 'redux-saga/effects';
import { authSagas } from './auth/sagas';

export function* rootSaga() {
	yield all([
		authSagas(),
	])
}