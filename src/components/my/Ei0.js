import React from "react"
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Ei0.css'

class Ei0 extends React.Component{
    tap(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="ei0">
            <div className="ei0header">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>更换手机号</div>
              <div></div>
            </div>
            <div className="ei0content">
                <p className="iconfont icon-shouji"></p>
                <span>您当前的手机号为：XXXXXXXXX</span>
            </div>
            <NavLink className="ei0bottom" to="/ei00">
                <p>更换手机号</p>
            </NavLink>
        </div>
        )
    }
}

export default Ei0