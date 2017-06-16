import React, {Component} from 'react';
import {Link} from "react-router"
import "./logn.css"

const RegisterIndex =()=>{
    return <div className="Login-box">
        <header className="Login-header"><a href="#/nologn" className="iconfont Login-return">&#xe65a;</a>注册</header>
        <div className="Login-index">
            <ul>
                <li className="login-welcome">欢迎注册账号加入堆糖</li>
                <li className="login-input"><input type="text" placeholder="输入手机号/邮箱/昵称"/></li>
                <li className="login-input"><input type="password" placeholder="输入密码"/></li>
                <li className="login-login"><input type="button" value="注册"/></li>
                <li className="login-other">第三方账号登录</li>
                <li className="login-agree">点击注册，即表示您已阅读并同意 <Link className="login-for" to="/register"> 用户协议</Link></li>
            </ul>
        </div>
    </div>
};

class RegisterPage extends Component{
    render(){
        return <div>
            <RegisterIndex/>
        </div>
    }
}

export default RegisterPage