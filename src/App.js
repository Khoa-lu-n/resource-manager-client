import React, { useEffect, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { APP_ROUTES, DEFAULT_APP_ROUTE } from "./app-route";
import { registerEvent } from "./services/auth-service";

function App() {
  let [, setState] = useState();
  function useForceUpdate() {
    setState(1);
  }

  useEffect(() => {
    registerEvent("App", useForceUpdate);
  }, []);

  return (
    <div>
      <Switch>
        {APP_ROUTES.map((route, index) => {
          console.log("Render");
          return (
            <Route
              key={index}
              path={route.path}
              component={
                route.requiredToken
                  ? checkAuthen(route.component)
                  : checkUnAuthen(route.component)
              }
            />
          );
        })}
        <Redirect to={DEFAULT_APP_ROUTE.path} />
      </Switch>
    </div>
  );
}

function checkAuthen(component) {
  return localStorage.getItem("token")
    ? component
    : () => <Redirect to="/login" />;
}

function checkUnAuthen(component) {
  return !localStorage.getItem("token")
    ? component
    : () => <Redirect to="/home" />;
}

export default App;
