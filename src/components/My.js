import React from "react"
import {BrowserRouter as Router,Route,Switch,NavLink,Link} from "react-router-dom";
import '../css/My.css';
import a from '../components/my/img/7.jpg'
import my00 from '../components/my/img/my00.jpg'
import my01 from '../components/my/img/my01.jpg'
import my02 from '../components/my/img/my02.jpg'
import my03 from '../components/my/img/my03.jpg'
import my04 from '../components/my/img/my04.jpg'
import my05 from '../components/my/img/my05.jpg'
import my06 from '../components/my/img/my06.jpg'
import my07 from '../components/my/img/my07.jpg'
import Footer from "./Footer"

class My extends React.Component{
    constructor(props){
      super(props)
      this.state={
        display:'none'
      }
    }
    get(){
      if (this.state.display === "block") {
        this.setState({ display: "none"})
      } else {
        this.setState({ display: "block"} )
      }
    }
    
    render(){
        return(
            <div className="My" > 
              <div className="myheader">我的</div>
              <NavLink className="title" to="news">
                <div className="img"></div> 
                <div className="con">
                  <p>小明</p>
                  <p>科技有限公司</p>
                </div>   
                <div className="iconfont icon-youjiantou tb"></div>     
              </NavLink>
              <div className="content">
                <div className="left">
                  <p>0.0</p>
                  <span>余额(牛币)</span>
                </div>
                <div className="right">
                  <p>0</p>
                  <span>红包(个)</span>
                </div>
              </div>
              <div className="bottom">
                <div className="bottom1">
                  <NavLink to="/one" className="bottom1l">
                    <div className="botttom1limg">
                      <img src={my00}/>
                    </div>
                    <div className="botttom1lcon">
                      <p>信贷经理认证</p>
                      <span>审核通过</span>
                    </div>
                  </NavLink>
                  <NavLink to="/two" className="bottom1r">
                    <div className="botttom1rimg">
                      <img src={my01}/>
                    </div>
                    <div className="botttom1rcon">
                      <p>立即充值</p>
                      <span>充值获得更多特权</span>
                    </div>
                  </NavLink>
                </div>
                
                <div className="bottom1">
                  <NavLink to="/three" className="bottom1l">
                    <div className="botttom1limg">
                       <img src={my02}/>
                    </div>
                    <div className="botttom1lcon">
                      <p>邀请信贷经理</p>
                      <span>邀请好友赚客户/红包</span>
                    </div>
                  </NavLink>
                  <NavLink to="/four" className="bottom1r">
                    <div className="botttom1rimg">
                    <img src={my03}/>
                    </div>
                    <div className="botttom1rcon">
                      <p>咨询客服</p>
                      <span>专业解答疑问</span>
                    </div>
                  </NavLink>
                </div>

                <div className="bottom1">
                  <NavLink to="/five" className="bottom1l">
                    <div className="botttom1limg">
                    <img src={my04}/> 
                    </div>
                    <div className="botttom1lcon">
                      <p>我的帖子</p>
                      <span>发帖回复</span>
                    </div>
                  </NavLink>
                  <NavLink to="/six" className="bottom1r">
                    <div className="botttom1rimg">
                    <img src={my05}/>
                    </div>
                    <div className="botttom1rcon">
                      <p>常见问题</p>
                      <span>使用指南</span>
                    </div>
                  </NavLink>
                </div>

                <div className="bottom1">
                  <div onClick={this.get.bind(this)} className="bottom1l">
                    <div className="botttom1limg">
                    <img src={my06}/>
                    </div>
                    <div className="botttom1lcon">
                      <p>微信公众号</p>
                      <span>关注更多福利</span>
                    </div>
                  </div>

                  <NavLink to="/eight" className="bottom1r" >
                    <div className="botttom1rimg">
                    <img src={my07}/>
                    </div>
                    <div className="botttom1rcon">
                      <p>设置</p>
                      <span>相关设置</span>
                    </div>
                  </NavLink>
                </div>     
              </div>
              <div className="imgs" style={{display: this.state.display}}>
            
                <img src={a} />
              </div>
              <Footer/>
            </div>
        )   
    }
}
export default My;