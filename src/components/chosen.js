import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'
import style from "./chosen.css";

class Chosen extends Component {
	state = {
			chosenData:[],
  	}
    componentDidMount() {
   		fetch("/napi/buy/inventory/list/by_cat/recommend/?timestamp=1497409427000")
   		.then((res)=>{
   			return res.json()
   		})
   		.then((data)=>{
   			this.setState({
          chosenData: data.data.object_list
      	});
   		})
   	}
		goToGoodsDetail(id){
			hashHistory.push(`/goodsDetail/${id}`)
			// console.log(id)
		}
    render(){
  		return <div className={style['chosenList']}>
      {
        this.state.chosenData.map((ele,index)=>{
          return <div key={index} className={style['chosenClass']}>
            <div className={style['chosenClassTit']}>-{ele.inventory_cat_name}精选-</div>
            <ul>
            {
              ele.rec_list&&ele.rec_list.map((el,ind)=>{
                return <li key={ind} onClick={()=>this.goToGoodsDetail(el.id)}>
                  <img src=""/>
                  <p>{el.inventory_caption}</p>
                  <span>{el.inventory_name}</span><br/>
                  <b>已售 {el.sold_quantity}</b><br/>
                  <i>￥{el.origin_price}</i>
                  <div className={style['listLine']}></div>
                </li>
              })
            }
            </ul>
            <div className={style['chosenMore']}>查看全部 ></div>
          </div>
        })
      }
      </div>
    }
}
  // <img src={el.pictures[0]}/>
 export default Chosen
