import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Eva from "./components/Eva";
import Friend from "./components/Friend";
import My from "./components/My";
import Home1 from "./components/Home1"
import Home2 from "./components/Home2"
import Detail from "./components/Detail"
import Renzheng from "./components/Renzheng"
import Register from "./components/Register"
import Login from "./components/Login"


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
                  <Route path="/home1" component={Home1}></Route>
                  <Route path="/home2" component={Home2}></Route>
                  <Route path="/renzheng" component={Renzheng}></Route>
                  <Route path="/register" component={Register}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/detail/:id" component={Detail}></Route>
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
