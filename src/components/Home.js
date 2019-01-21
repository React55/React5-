import React from "react"
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink} from "react-router-dom"
import "../css/home.css"
import Home1 from "./Home1"
import Home2 from "./Home2"
const active={
    "color": "#fff",
    'background': '#ff5832'
}
class Home extends React.Component{
    render(){
        return( 
        <Router>
            <div className="Home">
                <header>
                    <div><i className="iconfont icon-ditu"></i><span>郑州市</span></div>
                   
                        <div>
                            <NavLink className="home1" to="/home1"  activeStyle={active}>
                                <span>全部订单</span>
                            </NavLink>
                            <NavLink to="/home2" className="home2" activeStyle={active}>
                                <span>可抢订单</span>
                            </NavLink>
                            
                        </div>
                    
                    <div><i className="iconfont icon-tongzhi"></i></div>
                </header>
                <Switch>
                        <Route path="/home1" component={Home1}></Route>
                        <Route path="/home2" component={Home2}></Route>
                        <Redirect to="/home1" />
                </Switch>
             </div>
        </Router>
        )   
    }
}

export default Home;