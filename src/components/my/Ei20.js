import React from "react"
import './css/Ei20.css'
import { List, Switch } from 'antd-mobile';


class Ei20 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          checked1: true,
        }
    }
    tap(){
        this.props.history.go(-1)
    }
    render(){
        
        return(
            <div className="ei20">
                <div className="ei20header">
                    <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
                    <div className="c">修改密码</div>
                    <div></div>
                </div>
                <div className="ei20content">
                    <div className="nc">
                        <span>新密码</span>
                        <input type="text" placeholder="请输入6-18位密码"/>
                    </div>
                    <div className="nc">
                        <span>确认密码</span>
                        <input type="text" placeholder="请输入6-18位密码"/>
                       
                    </div>
                </div>
                <div className="ei20bottom">
                    <p>修改密码</p>
                </div>
            </div>
        )
    }
}

export default Ei20