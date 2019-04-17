import React, { Component } from 'react';
import TabBarCom from "./common/tabBar";
import{
      Home,
      Class,
      Mine,
      Shopping,
      Order
} from "@views"
import {HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
     <Router>
      <Switch>
        <Redirect from="/" to="/home" exact/>
        <Route path="/home" component={Home}/>
        <Route path="/class" component={Class}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/shopping" component={Shopping}/>
        <Route path="/order" component={Order}/>
      </Switch>
      <TabBarCom/>     
      </Router>
    );
  }
}

export default App;
