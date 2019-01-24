import React from "react"
import {NavLink} from "react-router-dom"
import { Carousel, WingBlank } from 'antd-mobile';
import "../css/home.css"
import Footer from "./Footer"
import $ from "jquery"
import pic1 from "../img/home1.jpg"
import pic2 from "../img/home2.jpg"
import pic3 from "../img/home3.jpg"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: ['1', '2', '3'],
            pic:[pic1,pic2,pic3],
            imgHeight: 176,
            sArr:["全部订单","可抢订单"],
            arr:[],
            arr1:["全部","折扣专区","社保公积贷","车主代","房抵贷","微粒贷","流水贷","生意贷","公职贷","过桥贷","寿险贷","电商贷"]
        } 
    }
    btn1(){
        $(".pos").css({"display":"none"})
    }
    btn2(){
        $(".pos").css({"display":"block"})
    }
    btn3(i){
       $(".left").find("li").eq(i).addClass("red").siblings().removeClass("red")
    }
    btn4(){
        this.props.history.push("./home1")
    }
    tap(i){
        if(i===1){
            $(".active1").eq(1).css({"color":"#fff","background":"#ff5832"})
        }else{
            $(".active1").eq(1).css({"color":"#ff5832","background":"#fff"})
        }
        if(i===0){
            $(".active1").eq(0).css({"color":"#fff","background":"#ff5832"})
        }else{
            $(".active1").eq(0).css({"color":"#ff5832","background":"#fff"})
        }
    }

    render(){
        var jsx=[];
        var jsx1=[];
        var jsx2=[];
        var _this=this
        this.state.sArr.map(function(item,i){ 
            jsx.push(<span className="active1" key={i} onClick={_this.tap.bind(_this,i)}>{item}</span>)
         })
        this.state.arr.map(function (item,i) {
            jsx1.push(
               
                <li key={i} >
                    <div>
                        <span>{item.name}</span>
                        <span>39分钟前</span>
                    </div>
                    <div>
                        <span>
                            <p>{item.money_description}</p>
                            <p>借款金额</p>
                        </span>
                        <span></span>
                        <span>
                            <p>{item.limit_description}</p>
                            <p>借款期限</p>
                        </span>
                        <span> <NavLink to={"/detail/"+item.id}>可抢单 </NavLink></span>
                    </div>
                    <div>
                        <div>
                            <i className="iconfont icon-wode1"></i>
                            <span>{item.work_city_name}</span>
                            <span>{item.purpose_description}</span>
                            <span>{item.age}岁</span>
                        </div>
                        <div>
                            <i className="iconfont icon-benzi"></i>
                            <span>{item.profession_description}</span>
                            <span>月收入{item.wld_money_description}</span>
                        </div>
                        <div>
                            <i className="iconfont icon-icon-test"></i>
                            <span>{item.credit_card_money_description}</span>
                            <span>{item.car_description}</span>
                            <span>{item.house_description}</span>
                        </div>
                    </div>
                   
                </li>
               
            )
        })
        this.state.arr1.map(function (item,i) {
            jsx2.push(
                <li key={i} onClick={_this.btn3.bind(this,i)} >
                    {item}
                </li>
            )      
        })
        return( 
            <div className="Home">
                <header>
                    <div><i className="iconfont icon-ditu"></i><span>郑州市</span></div>
                        <div className="top">
                            {
                               jsx
                            }                           
                        </div>
                    <div><i className="iconfont icon-tongzhi"></i></div>
                </header>
                <section>
                    <div className="top1">
                        <div className="left">
                            <ul>
                               {jsx2}
                                
                            </ul>
                        </div>
                        <div className="right iconfont icon-jiantou9"  onClick={this.btn2.bind(this)}></div>
                    </div>
                    <div className="middle">
                        <div className="pic">
                        <WingBlank>
                            <Carousel
                            autoplay={true}
                            infinite
                           // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            //afterChange={index => console.log('slide to', index)}
                            >
                            {this.state.data.map(val => (
                                
                                <div key={val} onClick={this.btn4.bind(this)}>
                                <img
                                    src={this.state.pic[2]}
                                    //src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                             </div>
                            ))}
                            </Carousel>
                        </WingBlank>
                        </div>
                        <ul>             
                            {
                                jsx1
                            }   
                        </ul>
                    </div>           
                </section>
                <div className="pos" >
                    <div className="top2">
                        <span></span>
                        <span>全部标签</span>
                        <span className="iconfont icon-error" onClick={this.btn1.bind(this)}></span>
                    </div>
                    <ul className="wrap">
                        <li>
                            <i className="iconfont icon-quanbu"></i>
                            <span>全部</span>
                        </li>
                        <li>
                            <i className="iconfont icon-zhekou"></i>
                            <span>折扣专区</span>
                        </li>
                        <li>
                            <i className="iconfont icon-chelianwang"></i>
                            <span>社保公积贷</span>
                        </li>
                        <li>
                            <i className="iconfont icon-iconfontzhizuobiaozhun023101"></i>
                            <span>车主代</span>
                        </li>
                        <li>
                            <i className="iconfont icon-qian"></i>
                            <span>房抵贷</span>
                        </li>
                        <li>
                            <i className="iconfont icon-benzi"></i>
                            <span>微粒贷</span>
                        </li>
                        <li>
                            <i className="iconfont icon-icon-test"></i>
                            <span>流水贷</span>
                        </li>
                        <li>
                            <i className="iconfont icon-loudou"></i>
                            <span>生意贷</span>
                        </li>
                        <li>
                            <i className="iconfont icon-yusan"></i>
                            <span>公职贷</span>
                        </li>

                        <li>
                            <i className="iconfont icon-dkw_daikuan-"></i>
                            <span>过桥贷</span>
                        </li><li>
                            <i className="iconfont icon-yusan"></i>
                            <span>寿险贷</span>
                        </li><li>
                            <i className="iconfont icon-gouwudai"></i>
                            <span>电商贷</span>
                        </li>
                    </ul>
                </div>
                
                <Footer/>
             </div>

        )   
    }
    componentWillMount(){
        
        var _this = this;
        $.ajax({
            type:"post",
            url:"/api/creditUnion/largeCredit/getPageLargeCredit",
            success:function (data) {
                console.log(data.data.pageDate.list)
                _this.setState({arr:data.data.pageDate.list})
                $(".left").find("li").eq(0).addClass("red")
                
            }
        })
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
   
}

export default Home;