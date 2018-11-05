import React from "react";
import {Route,Switch,Redirect,BrowserRouter} from "react-router-dom";
import Login from "../components/Login";



export default() =>{
    return(

        <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};