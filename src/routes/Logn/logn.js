/**
 * Created by 昊 on 2017/6/14.
 */
import React, {Component} from 'react';
import {Link} from "react-router"
import {Toast} from "antd-mobile";
import {connect} from 'react-redux';
import "./logn.css"





class LoginPage extends Component{

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
                        <li className="login-input">
                            <input ref="password" type="password" placeholder="输入密码"
                                   onChange={()=>{ this.getUsePassword() }} />
                        </li>
                        <li className="login-word">
                            <a href="javascript：；">忘记密码？</a>
                        </li>
                        <li className="login-login">
                            <Link>
                                <input type="button" value="登录" onClick={()=>{this.checkLogin() } } />
                            </Link>
                        </li>
                        <li className="login-other">第三方账号登录</li>
                        <li className="login-register">
                            没有账号？
                            <Link to="/register" className="login-to" >立即注册</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }

    checkLogin(){
        const {usename,usepassword,dispatch} = this.props;
        let url = 'http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+usename+'&password='+usepassword;
        Toast.loading('加载中...');
        fetch(url).then(res=>res.json())
            .then(data=>{
                Toast.hide();
                if(data===0){
                    alert("该用户名不存在")
                }else if(data===2){
                    alert("用户名和密码不符")
                }else{
                    alert("登录成功");
                    window.location.hash = '#/nologn';
                    const loginStates = true;
                    dispatch({type:"SET_STATE",payload:{loginStates}});
                }
            })
    }

    getUseName(){
        const name = this.refs.text.value;
        this.props.dispatch({type:"SET_NAME",payload:{name}})
    }

    getUsePassword(){
        const password = this.refs.password.value;
        this.props.dispatch({type:"SET_PASSWORD",payload:{password}});
    }

}



export default connect((state)=>{
    return {
        loginState:state.loginReducer.loginState,
        usename:state.loginReducer.usename,
        usepassword:state.loginReducer.usepassword
    }
})(LoginPage)