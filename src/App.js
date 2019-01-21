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
              <section>
                <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/eva" component={Eva}></Route>
                  <Route path="/friend" component={Friend}></Route>
                  <Route path="/my" component={My}></Route>
                  <Redirect to="/home"/>
                </Switch>
              </section>
              <footer>
                <NavLink to="/home" activeStyle={active}>
                  <figure>
                    <span className="iconfont icon-iconfontzhizuobiaozhun023101"></span>
                    <figcaption>首页</figcaption>
                  </figure>
                </NavLink>
                <NavLink to="/eva" activeStyle={active}>
                  <figure>
                    <span className="iconfont icon-weibiaoti2"></span>
                    <figcaption>客户</figcaption>
                  </figure>
                </NavLink>
                <NavLink to="/friend" activeStyle={active}>
                  <figure>
                    <span className="iconfont icon-shequzhongxin"></span>
                    <figcaption>社区</figcaption>
                  </figure>
                </NavLink>
                <NavLink to="/my" activeStyle={active}>
                  <figure>
                    <span className="iconfont icon-wode"></span>
                    <figcaption>我的</figcaption>
                  </figure>
                </NavLink>
              </footer>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
