import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import CreateNewRequest from "../components/CreateNewRequest";

export default () => {
  return (



    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/createNewRequest" render={props => <CreateNewRequest {...props} />} />

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};