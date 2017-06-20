/**
 * Created by 昊 on 2017/6/13.
 */
import React, {Component} from 'react';
import "./mine.css"

const MineIndex =()=>{
    return <div id="mine">
        <header className="Mine-header">我<a className="iconfont">&#xe620;</a></header>
        <ul className="Mine-list">
            <li className="person border-big">
                <a href="javascript:;"><span className="iconfont">&#xe61f;</span>素念未殇<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="#/order"><span className="iconfont">&#xe61f;</span>我的订单<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li className="carlist border-big">
                <a href="javascript:;"><span className="iconfont">&#xe61f;</span>素念未殇<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe61f;</span>我的礼券<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li className="border-big">
                <a href="javascript:;"><span className="iconfont">&#xe657;</span>我的福袋<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe618;</span>我的专辑<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe64e;</span>我的文章<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe660;</span>我的收藏<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe635;</span>我的订阅<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li className="border-big">
                <a href="javascript:;"><span className="iconfont">&#xe664;</span>我的Class<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe633;</span>我的评论<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li>
                <a href="javascript:;"><span className="iconfont">&#xe652;</span>我的收藏/赞<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li className="border-big">
                <a href="javascript:;"><span className="iconfont">&#xe666;</span>聊天<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
            <li className="friends border-big">
                <a href="javascript:;"><span className="iconfont">&#xe644;</span>添加好友<span className="iconfont ico-right">&#xe600;</span></a>
            </li>
        </ul>
    </div>
};

class MinePage extends Component{
    render(){
        return <div>
            <MineIndex/>
        </div>
    }
}

export default MineIndex