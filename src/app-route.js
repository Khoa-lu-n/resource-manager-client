import Login from "./containers/Login/index";
import Home from "./containers/Home/index";

export const APP_ROUTES = [
  {
    path: "/dashboard",
    exact: true,
    component: Home,
    requiredToken: true
  },
  {
    path: "/login",
    exact: false,
    component: Login,
    requiredToken: false
  }
];

export const DEFAULT_APP_ROUTE = APP_ROUTES[0];
