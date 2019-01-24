import React from "react"
import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Ei00.css'

class Ei00 extends React.Component{
    tap(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="ei00">
                <div className="ei00header">
                    <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
                    <div>安全验证</div>
                    <div></div>
                </div>
                <div className="ei00tit">更换手机号码要验证手机号：<span>&nbsp;XXXXXXXXXXX</span></div>
                <div className="ei00content">
                   <span>验证码</span>
                   <input type="text"/>
                   <span className="yam">获取验证码</span>
                </div>
                <div className="ei00bottom">
                    <p>下一步</p>
                </div>
            </div>
        )
    }
}

export default Ei00