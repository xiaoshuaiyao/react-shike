import React, { Component } from 'react';
import TabBarCom from "./common/tabBar";
import Shopping1 from "./views/shopping/shopping1"
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
        <Route path="/shopping1" component={Shopping1}/>
        <Route path="/order" component={Order}/>
      </Switch>
         
      </Router>
    );
  }
}

export default App;
