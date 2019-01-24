import React from "react"
import $ from "jquery"
import "../../css/Eva/Eposter.css"
import { Tabs, WhiteSpace } from 'antd-mobile';
class Eposter extends React.Component{
  
    constructor(props){
        super(props)
        this.state={
            navTit:["热门","表情包","励志","问候","节日","温情","全部"],
            postList:[]
        }

    }
    back(){
        this.props.history.push("/eva");
      
    }
    navClick(i){
        
        $("nav>ul>li").eq(i).addClass("click").siblings().removeClass("click")
        console.log(i)
        var self=this;
        var show=0;
        var page=0;
        if(i==0){
            show=1;
            page=1;
        }
        if(i==1){
            show=5;
            page=1
        }
       if(i==2){
        show=4;
        page=1
       }
       if(i==3){
           show=2;
           page=1;
       }
       if(i==4){
        show=6;
        page=1
       }
       if(i==5){
           show=3;
           page=1;
       }
       if(i==6){
        show=1000;
        page=1;
        }
       $.ajax({
        type:"post",
        url:"/api/creditUnion/showBill/getPageShowBill",
        data:{showBillPropertyId:show,listCurrentPage:page},
        success:function(data){
            self.setState({postList:data.data.pageDate.list})
        }
    })
    }
    render(){
     var navJsx=[];
     var self=this
     this.state.navTit.map(function(item,i){
         navJsx.push(
             <li onClick={self.navClick.bind(self,i)} key={i}>{item}</li>
         )
     })
    var postJsx=[];
    this.state.postList.map(function(item,i){
        postJsx.push(
            <li key={i}>
                <div>
                    <p>{item.showBill.usedCount}人使用</p>
                    <img src={"https://www.jiayiunion.com/"+item.showBill.picUrl}/>
                </div>
                <span>{item.showBill.name}</span>
            </li>
        )
    })
        return(
            <div className="Eposter">
                {/* 头部 */}
                <header>
                    <i className="iconfont icon-zuojiantou" onClick={this.back.bind(this)}></i>
                    <span>展业海报</span>
                    <i className="iconfont icon-sousuo"></i>
                </header>
                {/* 名片 */}
                <a href="#">
                    <div className="per">
                    
                            <h4>
                                <i className="iconfont icon-04f"></i>
                                <span>我的名片</span>
                            </h4>
                            <h5>
                                <span>前往</span>
                                <i className="iconfont icon-youjiantou"></i>
                            </h5>
                        
                    </div>
                </a>
                {/* 导航 */}
                <nav>
                    <ul>
                      {
                         navJsx
                      }
                    </ul>
                </nav>
                <section>
                    
                      <ul>
                          {postJsx}  
                          
                      </ul>
                      <div></div>
                </section>
            </div>
        )
    }
  
    componentWillMount(){
      
        var self=this;
        $.ajax({
            type:"post",
            url:"/api/creditUnion/showBill/getPageShowBill",
            data:{showBillPropertyId:1,listCurrentPage:1},
            success:function(data){
            
                console.log(data.data.pageDate.list)
                self.setState({postList:data.data.pageDate.list})
            
            }
        })
       
    }
    componentDidMount(){
        $("nav>ul>li").eq(0).addClass("click")
    }
}
export default Eposter;