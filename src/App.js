import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Eva from "./components/Eva";
import Friend from "./components/Friend";
import My from "./components/My";
import Eposter from "./components/Eva/Eposter"
import Edetail from "./components/Eva/Edetail"
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
                <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/eva" component={Eva}></Route>
                  <Route path="/friend" component={Friend}></Route>
                  <Route path="/my" component={My}></Route>
                  <Route path="/eposter" component={Eposter}></Route>
                  <Route path="/edetail" component={Edetail}></Route>
                  <Redirect to="/home"/>
                </Switch> 
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
