import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/Login";
import Option from "./options/Option";
import LoginAdmin from "./admin/LoginAdmin";
import Sign from "./sign/Sign";

// TODO add custom route for auth

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign" component={Sign} />
        <Route path="/options" component={Option} />
        <Route path="/admin" component={LoginAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
