import React from "react"
import Footer from "./Footer"
import '../css/Friend.css';
import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from "react-router-dom";
class Friend extends React.Component{
    render(){
    	
    	this.state={
            sArr:["李先生","王先生"]
        } 
        var jsx=[];
        var _this=this
        this.state.sArr.map(function(item,i){ 
            jsx.push(<NavLink to="/kxin">
						<li>
							<div className="t-1"> 
								<p>{item}<span className="iconfont icon-wode"></span></p>
								<i>2019-01-19 16:45:50</i>
							</div>
							<div className="t-2">
								<p>
									<i>金额：未填</i><i>期限：未填</i>							
								</p>
								<span>新增客户</span>
							</div>
						</li>
					</NavLink>)
         })
    	
    	
        return(
            <div className="Friend">
                <header>
					<i></i>
					<span>客户</span>
				<NavLink to="/zeng">
					<i>+</i>
				</NavLink>
				</header>
				<section>
					<ul>					
						{
							jsx
						}
					</ul>
				</section>
                <Footer/>
            </div>
        )
        
    }
}

export default Friend;


