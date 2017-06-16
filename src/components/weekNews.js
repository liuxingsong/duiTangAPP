import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import style from "./weekNews.css";
class WeekNews extends Component {
	state = {
       weekNewsData:[]
  	}
    componentDidMount() {
   		fetch("/napi/buy/index/module/info/?type=3,4,6&timestamp=1497353874000")
   		.then((res)=>{
   			return res.json()
   		})
   		.then((data)=>{
   		// 	console.log(data.data.object_list)
   			this.setState({
          weekNewsData: data.data.object_list
      	});
   		})
   	}

    render(){
  		return <ul className={style['newGoods']}>
  		{
  			this.state.weekNewsData.map((ele,index)=>{
  				return <li key={index}>
  					<p>{ele.enter_main_title}</p>
  					<span>{ele.enter_sub_title}</span>
						<Link to='/specialColumn' title={ele.enter_main_title}>
						<img src=''/>
						</Link>
  				</li>

  			})
  		}
  		</ul>
    }
}
// <Link to='/specialColumn' title={ele.enter_main_title}>
// <img src={ele.enter_image_url}/>
// </Link>
 export default WeekNews
