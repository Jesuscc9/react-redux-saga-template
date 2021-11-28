import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./rootReducer";
import { rootSaga } from './rootSaga';

export { authActions } from "./auth/actions";
export { alertActions } from "./alerts/actions";

export type RootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
const sagaMiddleware = createSagaMiddleware(rootSaga);
const compose = composeWithDevTools;
//@ts-ignore
export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);