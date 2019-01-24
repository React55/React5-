import React from "react"
import Footer from "./Footer"
import "../css/Eva/Eva.css"
import $ from "jquery"
import {NavLink} from "react-router-dom"
import imgUrl1 from "../img/eva/h_01.jpg"
import imgUrl2 from "../img/eva/h_02.jpg"
import imgUrl3 from "../img/eva/h_03.jpg"
import imgUrl4 from "../img/eva/h_04.jpg"
import imgUrl5 from "../img/eva/h_05.jpg"
import imgUrl6 from "../img/eva/h_06.jpg"
import imgUrl7 from "../img/eva/h_07.jpg"
import imgUrl8 from "../img/eva/h_08.jpg"
var headerArr1=[{
    name:"立即抢购",
    imgUrl:imgUrl1
},
{
    name:"折扣专区",
    imgUrl:imgUrl2  
},
{
    name:"同城甩单",
    imgUrl:imgUrl3   
},
{
    name:"我要刷单",
    imgUrl:imgUrl4   
}
]
var headerArr2=[{
    name:"我要充值",
    imgUrl:imgUrl5
},
{
    name:"邀请有赏",
    imgUrl:imgUrl6  
},
{
    name:"免费秒杀",
    imgUrl:imgUrl7   
},
{
    name:"网贷口子",
    imgUrl:imgUrl8   
}
]

class Eva extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posterArr:[],//海报数据
            newArr1:[],//列表1
            newArr2:[],//列表2
            newArr3:[],//列表3
           
        }
    }
    render(){
        var headerJsx1=[];//头部
       
        
        headerArr1.map(function(item,i){
            headerJsx1.push(
                <li key={i}>
                    <img src={item.imgUrl}/>
                    <span>{item.name}</span>
                </li>
            )
        })
        var headerJsx2=[];//头部
        headerArr2.map(function(item,i){
            headerJsx2.push(
                <li key={i}>
                    <img src={item.imgUrl}/>
                    <span>{item.name}</span>
                </li>
            )
        })
        //海报
        var posterJsx=[];
        this.state.posterArr.map(function(item,i){
            posterJsx.push(
                <li key={i}>
                    <div>
                        <p>{item.showBill.usedCount}人使用</p>
                        <img src={"https://www.jiayiunion.com/"+item.showBill.picUrl}/>
                    </div>
                    <span>{item.showBill.name}</span>
                </li>
            )
        })
        //newList
        var newJsx1=[];
      
        this.state.newArr1.map(function(item,i){
            newJsx1.push(
                <li className={item.coverImgUrl===null? "covers":"cont"} key={i}>
                <div className="contBox">
                    <h4>
                        <span>{item.newsProperty.name}</span>
                        <i>|</i>
                        <em>{item.title}</em>
                    </h4>
                    <h5>
                        <time>{item.createTime}</time>
                        <div>
                            <div>
                                <em className="iconfont icon-ico_yueduliang"></em>
                                <span>{item.readedCount}</span>
                            </div>
                            <div>
                                <em className="iconfont icon-share"></em>
                                <span>{item.forward}</span>
                            </div>
                        </div>
                    </h5>
                </div>
                <div className="conImg">
                    <img src={"https://www.jiayiunion.com/"+item.coverImgUrl}/>
                </div>
                <div className="coverBox">
                    <h4>
                        <span>{item.newsProperty.name}</span>
                        <i>|</i>
                        <em>{item.title}</em>
                    </h4>
                    <div className={item.imgUrls===null? "cover2Img":"coverImg"}>
                        <div className="bigImg">
                            <img  src={"https://www.jiayiunion.com/"+item.imgUrls}/>
                        </div>
                        <div className="smallImg">
                            <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[0]}/>
                        </div>
                        <div className="smallImg">
                        <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[1]}/>
                        </div>
                        <div className="smallImg">
                        <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[2]}/>
                        </div>
                    </div>
                    <h5>
                        <time>{item.createTime}</time>
                        <div>
                            <div>
                                <em className="iconfont icon-ico_yueduliang"></em>
                                <span>{item.readedCount}</span>
                            </div>
                            <div>
                                <em className="iconfont icon-share"></em>
                                <span>{item.forward}</span>
                            </div>
                        </div>
                    </h5>
                </div>
           </li>
            )
        })
        

        var newJsx2=[];
       
        this.state.newArr2.map(function(item,i){
            newJsx2.push(
                <li className={item.coverImgUrl===null? "covers":"cont"} key={i}>
                <div className="contBox">
                    <h4>
                        <span>{item.newsProperty.name}</span>
                        <i>|</i>
                        <em>{item.title}</em>
                    </h4>
                    <h5>
                        <time>{item.createTime}</time>
                        <div>
                            <div>
                                <em className="iconfont icon-ico_yueduliang"></em>
                                <span>{item.readedCount}</span>
                            </div>
                            <div>
                                <em className="iconfont icon-share"></em>
                                <span>{item.forward}</span>
                            </div>
                        </div>
                    </h5>
                </div>
                <div className="conImg">
                    <img src={"https://www.jiayiunion.com/"+item.coverImgUrl}/>
                </div>
                <div className="coverBox">
                    <h4>
                        <span>{item.newsProperty.name}</span>
                        <i>|</i>
                        <em>{item.title}</em>
                    </h4>
                    <div className={item.imgUrls===null? "cover2Img":"coverImg"}>
                        <div className="bigImg">
                            <img  src={"https://www.jiayiunion.com/"+item.imgUrls}/>
                        </div>
                        <div className="smallImg">
                            <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[0]}/>
                        </div>
                        <div className="smallImg">
                        <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[1]}/>
                        </div>
                        <div className="smallImg">
                        <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[2]}/>
                        </div>
                    </div>
                    <h5>
                        <time>{item.createTime}</time>
                        <div>
                            <div>
                                <em className="iconfont icon-ico_yueduliang"></em>
                                <span>{item.readedCount}</span>
                            </div>
                            <div>
                                <em className="iconfont icon-share"></em>
                                <span>{item.forward}</span>
                            </div>
                        </div>
                    </h5>
                </div>
           </li>
            )
        })


        var newJsx3=[];
       
        this.state.newArr3.map(function(item,i){
            newJsx3.push(
                <li className={item.coverImgUrl===null? "covers":"cont"} key={i}>
                <div className="contBox">
                    <h4>
                        <span>{item.newsProperty.name}</span>
                        <i>|</i>
                        <em>{item.title}</em>
                    </h4>
                    <h5>
                        <time>{item.createTime}</time>
                        <div>
                            <div>
                                <em className="iconfont icon-ico_yueduliang"></em>
                                <span>{item.readedCount}</span>
                            </div>
                            <div>
                                <em className="iconfont icon-share"></em>
                                <span>{item.forward}</span>
                            </div>
                        </div>
                    </h5>
                </div>
                <div className="conImg">
                    <img src={"https://www.jiayiunion.com/"+item.coverImgUrl}/>
                </div>
                <div className="coverBox">
                    <h4>
                        <span>{item.newsProperty.name}</span>
                        <i>|</i>
                        <em>{item.title}</em>
                    </h4>
                    <div className={item.imgUrls===null? "cover2Img":"coverImg"}>
                        <div className="bigImg">
                            <img  src={"https://www.jiayiunion.com/"+item.imgUrls}/>
                        </div>
                        <div className="smallImg">
                            <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[0]}/>
                        </div>
                        <div className="smallImg">
                        <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[1]}/>
                        </div>
                        <div className="smallImg">
                        <img src={item.contentImgUrls===null?"null":"https://www.jiayiunion.com/"+item.contentImgUrls.split(",")[2]}/>
                        </div>
                    </div>
                    <h5>
                        <time>{item.createTime}</time>
                        <div>
                            <div>
                                <em className="iconfont icon-ico_yueduliang"></em>
                                <span>{item.readedCount}</span>
                            </div>
                            <div>
                                <em className="iconfont icon-share"></em>
                                <span>{item.forward}</span>
                            </div>
                        </div>
                    </h5>
                </div>
           </li>
            )
        })       

        return(
            <div className="Eva">
               <header>
                   信贷牛牛
                   <span>我的名片</span>
               </header>
               <section>
                   {/* 头部 */}
                   <div className="headerBox">
                        <ul>
                           {headerJsx1}                         
                        </ul>
                        <ul>
                            {headerJsx2}
                        </ul>
                   </div>
                   {/* 展业海报 */}
                   <div className="poster">
                       <h2 className="tit">
                           <div>
                               <em></em>
                                <span>展业海报</span>
                           </div>
                           <NavLink to="/eposter">

                            <div className="more">
                                    <span>更多></span>
                                           
                            </div>
                           </NavLink>  
                       </h2>
                        <ul className="posterBox">
                           {posterJsx}
                        </ul>
                   </div>
                   <div className="newBox">
                        <h2 className="tit">
                           <div>
                               <em></em>
                                <span>信贷资讯</span>
                           </div>
                           <div>
                                <span>更多></span>
                                  
                           </div>
                        </h2>
                        <ul className="newList">
                            {newJsx1}
                            {newJsx2}
                            {newJsx3}  
                           
                           
                        </ul>
                   
                   </div>
                   
               </section>
                <Footer/>
            </div>
        )
    }
    componentWillMount(){
        var self=this;
        //海报
        $.ajax({
            type:"post",
            url:"/api/creditUnion/showBill/getPageShowBill",
            data:{listCurrentPage:1,showBillPropertyId:1},
            success:function(data){
                self.setState({posterArr:data.data.pageDate.list});
            }
        })
        //列表页1
        $.ajax({
            type:"post",
            url:"/api/creditUnion/news/getPageNewsHot",
            data:{listCurrentPage:1},
            success:function(data){
             
                self.setState({newArr1:data.data.pageDate.list})
            }

        })
        //列表页2
        $.ajax({
            type:"post",
            url:"/api/creditUnion/news/getPageNewsHot",
            data:{listCurrentPage:2},
            success:function(data){
             
                self.setState({newArr2:data.data.pageDate.list})
                
            }

        })
         //列表页3
         $.ajax({
            type:"post",
            url:"/api/creditUnion/news/getPageNewsHot",
            data:{listCurrentPage:3},
            success:function(data){
             
                self.setState({newArr3:data.data.pageDate.list})
            }

        })
    }
}
export default Eva; 
