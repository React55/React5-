import React from "react"
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from "react-router-dom"
import "../css/home.css"
import Footer from "./Footer"
import $ from "jquery"
const active={
    "color": "#fff",
    'background': '#ff5832'
}
class Home extends React.Component{
    tap(i){
        if(i==1){
            $(".active1").eq(1).css({"color":"#fff","background":"#ff5832"})
        }else{
            $(".active1").eq(1).css({"color":"#ff5832","background":"#fff"})
        }
        if(i==0){
            $(".active1").eq(0).css({"color":"#fff","background":"#ff5832"})
        }else{
            $(".active1").eq(0).css({"color":"#ff5832","background":"#fff"})
        }
    }
    render(){
        this.state={
            sArr:["全部订单","可抢订单"]
        } 
        var jsx=[];
        var _this=this
        this.state.sArr.map(function(item,i){ 
            jsx.push(<span className="active1" key={i} onClick={_this.tap.bind(_this,i)}>{item}</span>)
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
                
                <Footer/>
             </div>

        )   
    }
    componentWillMount(){
       
    }
}

export default Home;