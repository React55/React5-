import React from "react"
import "../css/register.css"
import $ from "jquery"
class Register extends React.Component{
    btn1(){
        this.props.history.go(-1)
    }
    btn2(){
        var _this = this
        $.ajax({
            type:"get",
            url:"http://jx.xuzhixiang.top/ap/api/reg.php",
            data:{username:$("section").find("input").eq(0).val(),password:$("section").find("input").eq(1).val()},
            dataType:"json",
            success:function (data) {
                if(data.code==1){
                    alert("注册成功")
                    _this.props.history.push("./login")
                }
            }
        })
    }
    render(){
        return(
            <div className="Register">
                 <header>
                    <i className="iconfont icon-zuojiantou" onClick={this.btn1.bind(this)}></i>
                    <span>注册</span>
                    <span></span>
                </header>
                <section>
                    <p>
                        <span>用户名</span>
                        <input type="text" placeholder="请输入用户名"/>
                    </p>
                    <p>
                        <span>密码</span>
                        <input type="text" placeholder="请输入密码"/>
                    </p>
                    <div>
                        <span>注册即表示同意</span>
                        <span>《用户服务协议》</span>
                    </div>
                    <button onClick={this.btn2.bind(this)}>确认</button>
                </section>
            </div>
        )
        
    }
 
}

export default Register;