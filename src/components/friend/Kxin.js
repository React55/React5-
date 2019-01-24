import React from "react";
import '../../css/kxin.css';

import {BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from "react-router-dom";
import { Tabs, WhiteSpace } from 'antd-mobile';
const tabs = [
  { title: '贷款需求' },
  { title: '详细信息' },
  { title: '跟进记录' },
];


const TabExample = () => (
  <div>
    <WhiteSpace />
    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
      <div>
       		<ul className="list-1">
				<li className="biao-1">最新贷款信息</li>
				<li>
					<span>联系时间</span>
					<span>无</span>
				</li>
				<li>
					<span>贷款金额</span>
					<span>无</span>
				</li>
				<li>
					<span>贷款期限</span>
					<span>无</span>
				</li>
				<li>
					<span>贷款用途</span>
					<span>无</span>
				</li>
			</ul>	
      </div>
      <div>
       		<ul className="list-1">
				<li>
					<span>身份证</span>
					<span>无</span>					
				</li>
				<li>
					<span>职业</span>
					<span>无</span>							
				</li>
				<li>
					<span>是否有本地社保</span>
					<span>无</span>
					
				</li>
				<li>
					<span>是否有本地公积金</span>
					<span>无</span>
					
				</li>
				<li>
					<span>信用卡额度</span>
					<span>无</span>					
				</li>
				<li>
					<span>名下是否有房产</span>
					<span>无</span>					
				</li>
			</ul>	
      </div> 
      <div>
       		<ul className="list-1">
				<li>
					<span>身份证</span>
					<span>无</span>					
				</li>
				<li>
					<span>职业</span>
					<span>无</span>							
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

class Kxin extends React.Component {
	render() {
		return(
			<div className="Kxin">
        		<header>
        		<NavLink to="/friend">
					<i className="iconfont icon-weibiaoti2"></i>
				</NavLink>	
					<span>客户信息</span>
					<i></i>
				</header>
				<section>
					<ul>		
						<li className="t-1">
							<span>11111<i>+</i></span>
							<p><span>新增客户</span><i>2019-01-19 16:45:50</i></p>
						</li>
						<li className="t-2">
							<i>
									提醒：未填							
								</i>
							<span>添加提醒</span>
						</li>
		
					</ul>
				</section>
				
				<section className="cha">				
					<TabExample />
				</section>
				
				<footer>
					<p>
						<span className="iconfont icon-iconfontzhizuobiaozhun023101"></span>
						<span className="te">11231133</span>
					</p>
					<p>
						<span className="iconfont icon-tongzhi"></span>
						<span className="iconfont icon-tongzhi"></span>
					</p>
				</footer>
            </div>
		)

	}
}

export default Kxin;

