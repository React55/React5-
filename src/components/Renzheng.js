import React from "react"
import "../css/renzheng.css"

class Renzheng extends React.Component{
btn1(){
    this.props.history.go(-1)
}
btn2(){
    alert("提交成功")
    this.props.history.push("/home")
}
    render(){
        return(
            <div className="Renzheng">
                <header>
                    <i className="iconfont icon-zuojiantou" onClick={this.btn1.bind(this)}></i>
                    <span>信贷经理认证</span>
                    <span></span>
                </header>
                <div className="top">
                    <span>实名认证</span>
                   
                </div>
                <div className="name1">
                    <p>
                        <span>真实姓名</span>
                        <input type="text" placeholder="请输入名字"/>
                    </p>
                    <p>
                        <span>身份证信息</span>
                        <input type="text" placeholder="请输入身份证号码"/>
                    </p>
                    <p onClick={this.btn2.bind(this)}>提交</p>
                </div>
            </div>
        )
    }
}

export default Renzheng;