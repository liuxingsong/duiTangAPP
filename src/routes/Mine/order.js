/**
 * Created by 昊 on 2017/6/14.
 */
import React, {Component} from 'react';
import {Tabs, WhiteSpace } from 'antd-mobile';
import {Link} from "react-router";

import './order.css';


const TabPane = Tabs.TabPane;

function callback(key) {
    console.log('onChange', key);
}
function handleTabClick(key) {
    console.log('onTabClick', key);
}

const TabExample = () => (
    <div className="Order-choose">
        <WhiteSpace />
        <Tabs className="tabs" defaultActiveKey="5" animated={false} onChange={callback} onTabClick={handleTabClick} activeUnderlineColor={"#e64a34"}>
            <TabPane tab="全部" key="1">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    选项卡一内容
                </div>
            </TabPane>
            <TabPane tab="待付款" key="2">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    选项卡二内容
                </div>
            </TabPane>
            <TabPane tab="待发货" key="3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    选项卡三内容
                </div>
            </TabPane>
            <TabPane tab="待收货" key="4">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    选项卡一内容
                </div>
            </TabPane>
            <TabPane tab="待评价" key="5">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '3rem', backgroundColor: '#fff' }}>
                    选项卡一内容
                </div>
            </TabPane>
        </Tabs>
        <WhiteSpace />
    </div>
);

const OrderIndex =()=>{
    return <div className="Login-box">
        <header className="Login-header"><Link to="/nologn" className="iconfont Login-return">&#xe65a;</Link>我的订单</header>
        <div>
            <TabExample />
        </div>
    </div>
};



class OrderPage extends Component{
    render(){
        return <div>
            <OrderIndex/>
        </div>
    }
}

export default OrderPage/**
 * Created by 昊 on 2017/6/15.
 */
