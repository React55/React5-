import React from "react"
import './css/News.css'
import { List, Switch } from 'antd-mobile';


class News extends React.Component{
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
            <div className="news">
                <div className="newsheader">
                    <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
                    <div className="c">个人信息</div>
                    <div>保存</div>
                </div>
                <div className="newscontent">
                    <div className="tx">
                        <span>头像</span>
                        <p>
                            <div></div>
                            <i className="iconfont icon-youjiantou"></i>
                        </p>
                    </div>
                    <div className="nc">
                        <span>昵称</span>
                        <input type="text" placeholder="1111"/>
                    </div>
                    <div className="nc">
                        <span>手机号</span>
                        <input type="text" placeholder="1888888888"/>
                        <i className="iconfont icon-youjiantou"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default News