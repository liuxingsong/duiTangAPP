/**
 * Created by 昊 on 2017/6/13.
 */
import React, {Component} from 'react';
import {Link} from "react-router"
import "./logn.css"
import Mine from "../Mine/mine";


const NologinIndex =()=>{
    return <div>
        <header className="Mine-header">我<a className="iconfont">&#xe620;</a></header>
        <div className="No-login-index">
            <ul>
                <li>{/*"/images/login-log.jpg"*/}
                    <img src={require("./login-log.jpg")} alt=""/>
                </li>
                <li className="No-login-text">
                    轻松注册，即可永久保存你的所爱<br/>
                    换了手机也能找得到哦
                </li>
                <li>
                    <Link to="/register">
                        <input className="register-btn" type="button" value="注册" />
                    </Link>
                    <Link to="/login">
                        <input  className="login-btn" type="button" value="登录"/>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
};

class NologinPage extends Component{
    render(){
        return <div>
            <NologinIndex/>
        </div>
    }
}

export default NologinPage