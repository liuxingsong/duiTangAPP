
import React,{Component} from  "react";
import "./public.css"

class Content extends  Component {
    render(){
        return <div className="content">{this.props.children}</div>
    }
}
class Footer extends Component {
    static defaultProps ={
        footerData:[
            {title:"首页",path:"/home"},
            {title:"发现",path:"/find"},
            {title:"商店",path:"/commodity"},
            {title:"我",path:"/my"}
        ],
        active:0
    };
    render(){
        const {footerData,active} = this.props;
        return <div className="footer">
            <ul>
                {
                   footerData.map((ele,index)=><li key={index}>
                        <a className={active==index?'active':''}
                            href={"#"+ele.path}
                        >{ele.title}</a>
                    </li>)
                }
            </ul>
        </div>
    }
}
export {Content,Footer}