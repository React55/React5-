import React from "react"
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Eight.css'


class Eight extends React.Component{
  tap(){
      console.log(111)
      this.props.history.go(-1)
  }
  btn1(){
    this.props.history.push("./register")
  }
    render(){
        return(
          <div className="eight">
            <div className="eiheader">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>设置</div>
              <div></div>
            </div>
            <div className="eicontent">
              <NavLink className="aaa" to="./ei0">
                <p>更换手机号</p>
                <span className="iconfont icon-youjiantou"></span>
              </NavLink>
              <NavLink className="aaa" to="./ei1">
                <p>推送管理</p>
                <span className="iconfont icon-youjiantou"></span>
              </NavLink>
              <NavLink className="aaa" to="./ei2">
                <p>密码管理</p>
                <span className="iconfont icon-youjiantou"></span>
              </NavLink>
              <NavLink className="aaa" to="./ei3">
                <p>关于我们</p>
                <span className="iconfont icon-youjiantou"></span>
              </NavLink>
            </div>
            <div className="eibottom" onClick={this.btn1.bind(this)}>
              <p>退出登录</p>
            </div>
          </div>
        )
    }
}

export default Eight;