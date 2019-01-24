import React from "react"
import  "../css/home2.css"
class Home2 extends React.Component{
    btn1(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="Home2">
                <header>
                    <i className="iconfont icon-zuojiantou" onClick={this.btn1.bind(this)}></i>
                    <span>充值说明</span>
                    <span></span>
                </header>
                <section>
                    <p>1、充值仅用于平台内抢单处理</p>
                    <p>2、信贷经理认证成功后方可抢单</p>
                    <p>3、如果您尚未刚过认证，请提交相应资料申请认证</p>
                </section>
            </div>
        )
        
    }
}

export default Home2;