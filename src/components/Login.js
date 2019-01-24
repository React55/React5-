import React from "react"
import "../css/login.css"
import $ from "jquery"
class Login extends React.Component{
    btn1(){
        this.props.history.go(-1)
    }
    btn2(){
        var _this = this;
        $.ajax({
            type:"get",
            url:"http://jx.xuzhixiang.top/ap/api/login.php",
            data:{username:$("section").find("input").eq(0).val(),password:$("section").find("input").eq(1).val()},
            dataType:"json",
            success:function (data) {
                if(data.code==1){
                    alert("登录成功")
                    _this.props.history.push("./home")
                }else{
                    alert("用户名或者密码错误")
                    $("section").find("input").eq(0).val("")
                    $("section").find("input").eq(1).val("")
                }
            }
        })
    }
    render(){
        return(
            <div className="Register">
                 <header>
                    <i className="iconfont icon-zuojiantou" onClick={this.btn1.bind(this)}></i>
                    <span>登录</span>
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
                        <span></span>
                    </div>
                    <button onClick={this.btn2.bind(this)}>确认</button>
                </section>
            </div>
        )
        
    }
 
}

export default Login;