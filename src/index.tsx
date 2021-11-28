import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./store";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
