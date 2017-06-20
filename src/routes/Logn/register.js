import React, {Component} from 'react';
import {Link} from "react-router"
import "./logn.css"
import {Toast} from "antd-mobile";

class RegisterPage extends Component{
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
                <header className="Login-header"><a href="#/nologn" className="iconfont Login-return">&#xe65a;</a>注册</header>
                <div className="Login-index">
                    <ul>
                        <li className="login-welcome">欢迎注册账号加入堆糖</li>
                        <li className="login-input">
                            <input ref="text" type="text" placeholder="输入手机号/邮箱/昵称"
                                   onChange={()=>{ this.getUseName() }} />
                        </li>
                        <li className="login-input">
                            <input ref="password" type="password" placeholder="输入密码"
                                   onChange={()=>{ this.getUsePassword() }} />
                        </li>
                        <li className="login-login"><input type="button" value="注册" onClick={()=>{this.registerID() } }/></li>
                        <li className="login-other">第三方账号登录</li>
                        <li className="login-agree">点击注册，即表示您已阅读并同意 <Link className="login-for" to="/register"> 用户协议</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    }
    registerID(){
        const {usename,usepassword} = this.state;
        let url = 'http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID='+usename+'&password='+usepassword;
        Toast.loading('加载中...');
        fetch(url).then(res=>res.json())
            .then(data=>{
                Toast.hide();
                console.log(data);
                if(data===0){
                    alert("该用户名已被使用")
                }else if(data===1){
                    alert("注册成功");
                    let b = this.state.usename;
                    window.location.hash = '#/login'
                }else{
                    alert("出现未知错误")
                }
            })
    }

    getUseName(){
        this.setState({
            usename: this.refs.text.value
        });
    }

    getUsePassword(){
        this.setState({
            usepassword: this.refs.password.value
        });
    }
}

export default RegisterPage