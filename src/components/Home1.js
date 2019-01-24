import React from "react"
import "../css/home1.css"

class Home1 extends React.Component{
    btn1(){
        this.props.history.push("./home2")
    }
    btn3(){
        this.props.history.go(-1)
    }
    render(){
        return(
            <div className="Home1">
                <header>
                    <span className="iconfont icon-zuojiantou" onClick={this.btn3.bind(this)}></span>
                    <span>立即充值</span>
                    <span>交易记录</span>
                </header>
                <section>
                    <nav>
                        <p>余额(牛币)</p>
                        <p>0</p>
                    </nav>
                    <div className="cz">
                        <span>选择充值金额</span>
                        <span>充值说明<i className="iconfont icon-youjiantou" onClick={this.btn1.bind(this)}></i></span>
                    </div>
                    <ul>
                        <li className="li-one">
                            <div>299牛币</div>
                            <div>
                                <span>￥299</span>
                                <span >充值</span>
                            </div>
                        </li>
                        <li >
                            <div>
                                <span>￥599</span>
                                <span>赠3个现金红包</span>
                            </div>
                            <div>
                                <span>￥299</span>
                                <span>充值</span>
                            </div>
                        </li>
                        
                        <li >
                            <div>
                                <span>￥1599</span>
                                <span>赠1个免单红包&5个现金红包</span>
                            </div>
                            <div>
                                <span>￥1599</span>
                                <span>充值</span>
                            </div>
                        </li>
                        <li >
                            <div>
                                <span>￥2899</span>
                                <span>赠2个免单红包&8个现金红包</span>                                
                            </div>
                            <div>
                                <span>￥2899</span>
                                <span>充值</span>
                            </div>
                        </li>
                        <li >
                            <div>
                                <span>￥5899</span>
                                <span>赠5个免单红包&10个现金红包</span>                                
                            </div>
                            <div>
                                <span>￥5899</span>
                                <span>充值</span>
                            </div>
                        </li>
                        <li className="li-one">
                            <div>10899牛币</div>
                            <div>
                                <span>￥10899</span>
                                <span>充值</span>
                            </div>
                        </li>
                    </ul>
                </section>
                
            </div>
        )
        
    }

    
    
}

export default Home1;