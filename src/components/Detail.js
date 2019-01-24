import React from "react"
import $ from "jquery";
import "../css/detail.css"

class Detail extends React.Component{
    btn1(){
        this.props.history.go(-1)
    }
    btn2(){
        $(".totals").hide()
        $(".mengban").hide()
    } 
    btn4(){
        $(".totals").show()
        $(".mengban").show()
    } 
    btn3(){
        this.props.history.push("../renzheng")
        console.log(2)
    }
    constructor(props){
        super(props)
        this.state={
            detail:[]
        }
    }



    render(){
        return(
            <div className="Detail">
                <header>
                    <i className="iconfont icon-zuojiantou" onClick={this.btn1.bind(this)}></i>
                    <span>订单详情</span>
                    <span></span>
                </header>
               <section>
                   <div className="name">
                        <p>{this.state.detail.name}<i className="iconfont icon-wode"></i></p>
                        <p>申请时间:{this.state.detail.createTime}</p>
                        <p>
                            <span>
                                <span>{this.state.detail.money_description}</span>
                                <span>贷款金额</span>
                            </span>
                            <i></i>
                            <span>
                                <span>{this.state.detail.limit_description}</span>
                                <span>贷款期限</span>
                            </span>
                            <i></i>
                            <span>
                                <span>{this.state.detail.purpose_description}</span>
                                <span>贷款目的</span>
                            </span>
                            
                        </p>
                   </div>
                   <div className="phone">
                        <div className="left2">
                            <span>{this.state.detail.mobile}</span>
                            <span>(抢单后可联系)</span>
                        </div>
                        <div className="right2">
                            <i className="iconfont icon-dianhua"></i>
                            <i className="iconfont icon-duanxin"></i>
                        </div>
                   </div>
                   <p>基本信息</p>
                   <div className="xinxi">
                        <div className="xinxi-top">
                            <p>
                                <i className="iconfont icon-nianbao"></i>
                                <span>{this.state.detail.age}</span>
                                <i className="iconfont icon-ditu1"></i>
                                <span>{this.state.detail.work_city_name}</span>
                                <i className="iconfont icon-shijian"></i>
                                <span>上班族</span>
                            </p>
                            <p>
                                <span>本地社保{this.state.detail.sb_security_description}</span>
                                <span>本地公积金{this.state.detail.sb_fund_description}</span>
                            </p>
                           
                        </div>
                        <div className="ziliao">
                             <p>
                                <span>月收入</span>
                                <span>{this.state.detail.wld_money_description}</span>
                            </p>
                            <p>
                                <span>本地社保</span>
                                <span>{this.state.detail.sb_security_description}</span>
                            </p>
                            <p>
                                <span>本地公积金</span>
                                <span>{this.state.detail.sb_fund_description}</span>
                            </p>
                            <p>
                                <span>职业身份</span>
                                <span>上班族</span>
                            </p>
                            <p>
                                <span>收入形势</span>
                                <span>转帐工资</span>
                            </p>
                            <p>
                                <span>单位类型</span>
                                <span>其他</span>
                            </p>
                            <p>
                                <span>名下车产</span>
                                <span>{this.state.detail.car_description}</span>
                            </p>
                            <p>
                                <span>名下房产</span>
                                <span>{this.state.detail.house_description}</span>
                            </p>
                        </div>
                   </div>
               </section>
               <footer>
                   <span onClick={this.btn4.bind(this)}>立即抢单</span>
               </footer>
               <div className="totals">
                    <p>提示</p>
                    <span>您还未认证信贷经理,不能获取客户的联系方式,请立即认证</span>
                    <div>
                        <span className="quxiao" onClick={this.btn2.bind(this)}>取消</span>
                        <span className="renzheng"  onClick={this.btn3.bind(this)}>去认证</span>
                    </div>
               </div>             
               <div className="mengban"></div>
            </div>
        )
    }
    componentDidMount(){
        var _this = this;
        $.ajax({
            type:"post",
            url:"/api/creditUnion/largeCredit/getLargeCredit",
            async:false,
            data:{id:_this.props.match.params.id},
            success:function(data){
                _this.setState({detail:data.data.item})
               // console.log(data.data.item)
            }
        })
    }
}

export default Detail;