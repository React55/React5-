import React from "react"
import './css/One.css'

class One extends React.Component{
    tap(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="on">
            <div className="onheader">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>信贷经理认证</div>
              <div></div>
            </div>
            <div className="oncontent">
                <span>您还未认证，快去认证吧</span>
            </div>
            <div className="onbottom">
                <p>去认证</p>
            </div>
        </div>
        )
    }
}

export default One