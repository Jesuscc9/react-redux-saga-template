import { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { privateRoutes } from "../src/routes/private";
import { createBrowserHistory } from "history";
import Cookies from "js-cookie";
import { Login } from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { authActions, RootStateType, alertActions } from "./store";
import { Alerts } from "./components";

export const history = createBrowserHistory();

export const App = () => {
  const token = Cookies.get("auth");

	const isAuth = useSelector((state: RootStateType) => state.auth.isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.me());

    setTimeout(() => {
      dispatch(alertActions.newAlert({ type: "error", message: "hola"}));
    }, 3000)

    setTimeout(() => {
      dispatch(alertActions.newAlert({ type: "info", message: "informndo"}));
    }, 5000)
  }, [])

  return (
    <Router history={history}>
      <Alerts />
      { (isAuth) || (token && token.length > 0) ? (
        <Switch>
          {privateRoutes.map((route, i) => (
            <Route
              key={i}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={() => <p>Not found</p>} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={() => <p>Not found</p>} />
          ))
        </Switch>
      )}
    </Router>
  );
};

export default App;