import React from "react"
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from "react-router-dom"
import "../css/home1.css"
import $ from "jquery";
import "../css/home1.css"
class Home1 extends React.Component{
    render(){
        return(
            <div className="Home1">
                <header>
                    <div className="left"></div>
                    <div className="right iconfont icon-jiantou9"></div>
                </header>
            </div>
        )
        
    }
}

export default Home1;