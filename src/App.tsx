import { Router, Switch, Route } from "react-router-dom";
import { privateRoutes } from "../src/routes/private";
import { createBrowserHistory } from "history";
import Cookies from "js-cookie";
import { Login } from "./pages";
import { ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme";

export const history = createBrowserHistory();

export const App = () => {
  const token = Cookies.get("authToken");

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        {token && token.length > 0 ? (
          <Switch>
            {privateRoutes.map((route, i) => (
              <Route
                key={i}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route component={() => <p>Not found</p>} />
            ))
          </Switch>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
