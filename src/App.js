import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  render() {
    const childProps = {
  isAuthenticated: this.state.isAuthenticated,
  userHasAuthenticated: this.userHasAuthenticated
};
    return (
     <div>
      <Routes childProps={childProps} />

     </div>
    );
  }
}

export default App;
