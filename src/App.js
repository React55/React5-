import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Eva from "./components/Eva";
import Friend from "./components/Friend";
import My from "./components/My";
const active={
  "color":"red"
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <div>
                <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/eva" component={Eva}></Route>
                  <Route path="/friend" component={Friend}></Route>
                  <Route path="/my" component={My}></Route>
                  <Redirect to="/home"/>
                </Switch>
                           
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
