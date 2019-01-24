import React from "react";
import '../../css/zeng.css';

import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from "react-router-dom";
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '点击贷款需求' },
  { title: '点击职业信息' },
  { title: '点击详细信息' },
];
const TabExample = () => (
  <div>
    <WhiteSpace />
    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
      <div>
       		<ul className="list-1">
				<li className="biao-1">最新贷款信息</li>
				<li>
					<span>贷款金额</span>
					<input type="text" placeholder="请选择贷款金额"/>
					<i>+</i>
				</li>
				<li>
					<span>贷款期限</span>
					<input type="text" placeholder="请选择贷款期限"/>
					<i>+</i>
				</li>
				<li>
					<span>贷款目的</span>
					<input type="text" placeholder="请选择贷款目的"/>
					<i>+</i>
				</li>
				<li>
					<span>方便联系时间</span>
					<input type="text" placeholder="请选择方便联系时间"/>
					<i>+</i>
				</li>
			</ul>	
      </div>
      <div>
       		<ul className="list-1">
				<li>
					<span>身份证</span>
					<input type="text" placeholder="请填写身份证号"/>
					
				</li>
				<li>
					<span>职业</span>
					<input type="text" placeholder="请填写职业信息"/>
					
				</li>
			</ul>	
      </div>
      <div>
       		<ul className="list-1">
				<li>
					<span>是否有本地社保</span>
					<input type="text" placeholder="是否有本地社保"/>
					
				</li>
				<li>
					<span>是否有本地公积金</span>
					<input type="text" placeholder="是否有本地公积金"/>
					
				</li>
				<li>
					<span>信用卡额度</span>
					<input type="text" placeholder="信用卡额度"/>
					
				</li>
				<li>
					<span>名下是否有房产</span>
					<input type="text" placeholder="名下是否有房产"/>
				
				</li>
			</ul>	
      </div>
      
    </Tabs>
    <WhiteSpace />
  </div>
);
const active={
  "color":"red"
}

class Zeng extends React.Component {
	render() {
		this.state={
            sArr:["全部订单","可抢订单"],
            sBrr:["全部订单","可抢订单"],
            sCrr:["全部订单","可抢订单"]
        } 
        var jsx=[];
        var jsx1=[];
        var jsx2=[];
        var _this=this
        
        this.state.sArr.map(function(item,i){ 
            jsx.push(<p><input type="radio" name="1"value="你好" /><span>确定</span></p>)
         })
		
		this.state.sBrr.map(function(item,i){ 
            jsx1.push(<p><input type="radio" name="1"value="你好" /><span>确定</span></p>)
         })
		
		this.state.sCrr.map(function(item,i){ 
            jsx2.push(<p><input type="radio" name="1"value="你好" /><span>确定</span></p>)
         })
		
		return(
			<div className="Zeng">
                <header>
                <NavLink to="/friend">
					<i>取消</i>
				</NavLink>
					<span>新增客户</span>
				<NavLink to="/friend">
					<i>保存</i>
				</NavLink>
				</header>
				<section>
					<ul>
						<li className="biao-1">基本信息</li>
						<li>
							*<span>客户名称</span>
							<input type="text" placeholder="请输入姓名"/>
						</li>
						<li>
							*<span>联系方式</span>
							<input type="text" placeholder="请输入手机号码"/>
						</li>
						<li>
							<span>附录<i>+</i></span>
							<input type="text" placeholder="请输入"/>
						</li>
					</ul>	
					
					<TabExample />
				</section>
            </div>
		)

	}
}

export default Zeng;

