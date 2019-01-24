import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Eva from "./components/Eva";
import Friend from "./components/Friend";
import My from "./components/My";
import One from "./components/my/One";
import Two from "./components/my/Two";
import Three from "./components/my/Three";
import Four from "./components/my/Four";
import Five from "./components/my/Five";
import Six from "./components/my/Six";
import Seven from "./components/my/Seven";
import Eight from "./components/my/Eight";
import News from "./components/my/News";
import Ei0 from "./components/my/Ei0";
import Ei00 from "./components/my/Ei00";
import Ei1 from "./components/my/Ei1";
import Ei2 from "./components/my/Ei2";
import Ei20 from "./components/my/Ei20";
import Ei3 from "./components/my/Ei3";
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
                  <Route path="/one" component={One}></Route>  
                  <Route path="/two" component={Two}></Route>
                  <Route path="/three" component={Three}></Route>
                  <Route path="/four" component={Four}></Route>
                  <Route path="/five" component={Five}></Route>
                  <Route path="/six" component={Six}></Route>
                  <Route path="/seven" component={Seven}></Route>
                  <Route path="/eight" component={Eight}></Route> 
                  <Route path="/news" component={News}></Route> 
                  <Route path="/ei0" component={Ei0}></Route>
                  <Route path="/ei00" component={Ei00}></Route>  
                  <Route path="/ei1" component={Ei1}></Route> 
                  <Route path="/ei2" component={Ei2}></Route> 
                  <Route path="/ei20" component={Ei20}></Route> 
                  <Route path="/ei3" component={Ei3}></Route> 
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
