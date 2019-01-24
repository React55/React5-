import React from "react"
import './css/Ei3.css'
import ei3 from '../my/img/ei3.jpg'

class Ei3 extends React.Component{
    tap(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="ei3">
            <div className="ei3header">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>关于我们</div>
              <div></div>
            </div>
            <div className="ei3content">
               <img src={ei3}/>
               <p>本产品是一个专门服务是一个专是一个专是一个专是一个专是一个专是一个专是一个专是一个专</p>
            </div>
            <div className="ei3bottom">
               <h3>版本：1.9.3</h3>
            </div>
        </div>
        )
    }
}

export default Ei3