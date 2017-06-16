/**
 * Created by 昊 on 2017/6/14.
 */
import React, {Component} from 'react';
import {Link} from "react-router"
import "./logn.css"





class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            usename:"",
            usepassword:""
        };
    }

    render(){
        return <div>
            <div className="Login-box">
                <header className="Login-header"><Link to="/nologn" className="iconfont Login-return">&#xe65a;</Link>登录</header>
                <div className="Login-index">
                    <ul>
                        <li className="login-welcome">欢迎登录堆糖</li>
                        <li className="login-input">
                            <input ref="text" type="text" placeholder="输入手机号/邮箱/昵称"
                                   onChange={()=>{ this.getUseName() }} />
                        </li>
                        <li className="login-input"><input type="password" placeholder="输入密码" /></li>
                        <li className="login-word"><a href="javascript：；">忘记密码？</a></li>
                        <li className="login-login"><Link><input type="button" value="登录" onClick={()=>{this.checkLogin() } } /></Link></li>
                        <li className="login-other">第三方账号登录</li>
                        <li className="login-register">没有账号？<Link to="/register" className="login-to" >立即注册</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    }

    checkLogin(){
        console.log(this.state.usename)
    }

    getUseName(){
        this.setState({
            usename: this.refs.text.value
        });
    }

}



export default LoginPage