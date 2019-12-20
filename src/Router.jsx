import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./login/Login";
import Option from "./options/Option";
import LoginAdmin from "./admin/LoginAdmin";
import Sign from "./sign/Sign";
import pdf from "./pdf/pdf";

// TODO add custom route for auth

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign" component={Sign} />
        <Route path="/options" component={Option} />
        <Route path="/admin" component={LoginAdmin} />
        <Route path="/pdf" component={pdf} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
