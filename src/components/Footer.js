import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from "react-router-dom"
const active={
  "color":"red"
}
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <footer >
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
      
   
    );
  }
}

export default Footer;
