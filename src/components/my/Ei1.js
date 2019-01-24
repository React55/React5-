import React from "react"
import './css/Ei1.css'
import { List, Switch } from 'antd-mobile';


class Ei1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          checked: false,
          checked1: true,
        }
    }
    tap(){
        this.props.history.go(-1)
    }
    render(){
        
        return(
            <div className="ei1">
                <div className="ei1header">
                <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
                <div className="c">推送管理</div>
                <div>保存</div>
                </div>
                <List.Item
                    extra={<Switch
                        checked={this.state.checked}
                        onChange={() => {
                        this.setState({
                            checked: !this.state.checked,
                        });
                        }}
                    />}
                >订单消息推送</List.Item>
                <div className="ei1content">
                    <div className="ei0title">
                        <p>推送订单类型</p>
                    </div>
                    <div className="ei0lx">
                        <span>折扣专区</span><span>社保公积贷</span><span>车主贷</span>
                        <span>房抵贷</span><br/>
                        <span>微粒贷</span><span>流水贷</span><span>生意贷</span><span>公职贷</span>
                    </div>
                </div>

            
          
        </div>
        )
    }
}

export default Ei1