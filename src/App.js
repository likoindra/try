import Layout from "./components/layout/Layout";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import { Provider } from "react-redux";
import store from "../src/redux/app/store";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import DashboardApp from "./pages/DashboardApp";
import LayoutSA from "./components/SuperAdmin/_dashboard/LayoutSA/LayoutSA";
function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route path="/:subpage/" component={Layout} /> */}
        <Route path="/:subpage/" component={LayoutSA} />
      </Switch>
    </Provider>
  );
}

export default App;
