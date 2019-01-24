import React from "react"
//import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Four.css'

class Four extends React.Component{
    tap(){
        this.props.history.go(-1)
    }  
    render(){
        return(
            <div className="four">
                <div className="foheader">
                    <div  className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
                    <div>咨询客服</div>
                    <div></div>
                </div>
                <div className="focontent">
                    <div className="tel">
                        <i className="iconfont icon-qq"></i><span>1216726966</span>
                        <i className="iconfont icon-dianhua"></i>
                        <span>0571-56234930</span>
                    </div>
                    <div className="tex">
                        <textarea cols="51" rows="8" placeholder="您好，为了更好的解决问题，请告诉我们以下信息：1.您的姓名，2：问题描述"></textarea>   
                    </div>
                    <div className="ipt">
                        <input type="text"  placeholder="请输入手机号"/>
                    </div>
                    <div className="fobottom">
                        <p>提交</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Four