import React from "react"
//import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Three.css'
import my0 from "./img/my0.jpg"
import creatHistory from 'history/createHashHistory' 


class Three extends React.Component{
    constructor(props){
      super(props)

    };
    
    tap(){
      creatHistory().goBack();
    }
    render(){
      var  _this=this
        return(
          <div className="eight">
            <div className="thheader">
              <div onClick={_this.tap.bind(_this)} className="iconfont icon-zuojiantou ic" ></div>
              <div>邀请好友</div>
              <div></div>
            </div>
            <div className="thimg">
            <img src={ my0 } />
            </div>
          </div>
        )
    }
}

export default Three;