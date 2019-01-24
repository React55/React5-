import React from "react"
//import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Five.css'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
function renderTabBar(props) {
    return (<Sticky>
      {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
  }
  const tabs = [
    { title: '我的圈帖0' },
    { title: '我的评论0' },
   
  ];
  
  const TabExample = () => (
    <div>
      <WhiteSpace />
      <StickyContainer>
        <Tabs tabs={tabs}
          initalPage={'t2'}
          renderTabBar={renderTabBar}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '11rem', backgroundColor: '#fff' }}>
            暂无
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '11rem', backgroundColor: '#fff' }}>
           暂无
          </div>
        </Tabs>
      </StickyContainer>
      <WhiteSpace />
    </div>
  );
  
class Five extends React.Component{
  tap(){
      this.props.history.go(-1)
  }       
    render(){
        return(
            <div className="five">
                <div className="fiheader">
                    <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
                    <div>我的帖子</div>
                    <div></div>
                </div>
                <div className="fititle">
                    <div className="fiimg"></div>
                    <span>XXXXX</span>
                </div>
                <div className="ficontent">
                     <TabExample />
                </div>
               
               
            </div>
        )
    }
}

 

export default Five