import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import CreateNewRequest from "../components/CreateNewRequest";
import Signup from "../components/Signup";
import AddEmployee from "../components/AddEmployee";
import ListEmployees from "../components/ListEmployees";
import TimeSheetCalander from "../components/TimeSheet_Calender";
import Search from "../components/Search";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route
          exact
          path="/addEmployee"
          render={props => <AddEmployee {...props} />}
        />
        <Route
          exact
          path="/TimeSheetCalander"
          render={props => <TimeSheetCalander {...props} />}
        />

        <Route
          exact
          path="/listEmployees"
          render={props => <ListEmployees {...props} />}
        />
        <Route
          exact
          path="/createNewRequest"
          render={props => <CreateNewRequest {...props} />}
        />
        <Route exact path="/search" render={props => <Search {...props} />} />

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
