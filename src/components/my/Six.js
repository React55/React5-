import React from "react"
 //import {BrowserRouter as Router,Route,Switch,NavLink} from "react-router-dom"
import './css/Six.css'
import { Accordion } from 'antd-mobile';


class Six extends React.Component{
    tap(){
        this.props.history.go(-1)
    }  
    onChange = (key) => {
        console.log(key);
      }
    render(){
        return(
          <div className="eight">
            <div className="siheader">
              <div className="iconfont icon-zuojiantou ic" onClick={this.tap.bind(this)}></div>
              <div>常见问题</div>
              <div></div>
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }} >
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="1.如何认证成为信贷经理？" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
                </Accordion>
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }} >
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="2.“共享抢单”和“买断抢单”的含义" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
                </Accordion>
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }} >
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="3.如何认证成为信贷经理？" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
                </Accordion>
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }} >
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="4.如何认证成为信贷经理？" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
                </Accordion>
            </div>
            <div style={{ marginTop: 10, marginBottom: 10 }} >
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="5.如何认证成为信贷经理？" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
                </Accordion>
            </div>
          </div>
        )
    }
}

export default Six;