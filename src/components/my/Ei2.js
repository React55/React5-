import React from "react"
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Ei2.css'

class Ei2 extends React.Component{
    tap(){
        
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="ei2">
            <div className="ei2header">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>密码管理</div>
              <div></div>
            </div>
            <div className="eicontent">
                <NavLink className="aaa" to="/ei20">
                    <p>修改密码</p>
                    <span className="iconfont icon-youjiantou"></span>
                </NavLink>
            </div>
        </div>
        )
    }
}

export default Ei2