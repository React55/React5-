import React from "react"
import $ from 'jquery';
//import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Two.css'



class Two extends React.Component{
    constructor(props){
      super(props)
      this.state={
        list:[],
        
    }

    };
    tap(){
        this.props.history.go(-1)
    }
    
    render(){
        var jsx=[];
        this.state.list.map(function(item,i){ 
            var a = item.money
            jsx.push(<div className="jinbi" key={i}>
                        <div className="lefts">
                            <p>{a}牛币</p>
                            <span>{item.rewardDescription}</span>
                        </div>
                        <div className="rights">
                            <span>￥{a}</span>
                            <span className="cz">充值</span>
                        </div>
                    </div>)
         })
        return(
          <div className="two">
            <div className="twheader">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>充值</div>
              <div>交易记录</div>
            </div>
            <div className="twtitle">
                <div className="twimg">0.0</div>
                <span>余额（牛币）</span>
            </div>
            <div className="twcontent">
                <div className="twctit">
                    <p>选择充值金额</p>
                    <span>充值说明<i className="iconfont icon-youjiantou" ></i></span>
                </div>
                {
                    jsx
                }
            </div>
          </div>
        )
    }
    componentWillMount(){
		var _this=this;
		$.ajax({
			type:"post",
			url:"/apis/",
			async:false,
            dataType:'json',
            crossDomain:true,
			success:function(data){
                _this.setState({list:data.data.list})
			}
		});
	}  
    
}

export default Two;