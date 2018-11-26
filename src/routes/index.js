import React from "react";
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import CreateNewRequest from "../components/CreateNewRequest";
import Signup from "../components/Signup";

export default ({ childProps }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route
          exact
          path="/createNewRequest"
          render={props => <CreateNewRequest {...props} />}
        />
        {/* <Link to="/signup">Sign Up</Link> */}
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
