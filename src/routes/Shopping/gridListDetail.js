import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {hashHistory} from 'react-router'
import style from "./gridListDetail.css";
import {NavBar} from "antd-mobile";

class GridListDetail extends Component {
    state={
      goodsListData:[],
      gridData:['1','2'],
      title:this.props.params.name
    }
    back() {
      hashHistory.push(`/shopping`)
    }
		render(){
      return (
          <div className={style['gridListPage']}>
            <NavBar leftContent={this.state.title} mode="light"
               className='navBar'
               onLeftClick={() => this.back()}
            ></NavBar>
            <div className={style['content']}>
                <ul className={style['gridList']}>{
                  this.state.gridData.map((ele,index)=><li key={index}>{ele.name}</li>)
                }</ul>
                <ul className={style['sortwhys']}>
                  <li>默认</li>
                  <li>热度</li>
                  <li>新品</li>
                  <li>价格</li>
                </ul>
                <ul className={style['goodsList']}>{
                    this.props.goodsListData.map((ele,index)=>{
                      return <li>
                        <Link href={ele.banner_link}><img src=""/></Link>
                        <p>{ele.inventory_caption}</p>
                        <span>{ele.inventory_name}</span><br/>
                        <b>已售 {ele.sold_quantity}</b><br/>
                        <i>￥{ele.origin_price}</i>
                        <div className={style['listLine']}></div>
                      </li>})
                }</ul>
            </div>
          </div>
      )}
      componentDidMount(){
         fetch('/napi/buy/category/list/?timestamp=1497534914000')
         .then((res)=>{
           return res.json()
         }).then((data)=>{
          //  console.log(data.data.object_list);
           data.data.object_list.map((ele,index)=>{
             if (ele.id==this.props.params.id) {
               this.setState({
                 gridData:ele.category_list,
                 title:ele.name
               })
           }})
          //  console.log(this.state.gridData.category_list);
         })
         this.props.dispatch(getGoodsListData(this.props.params.value))
       }
}
function getGoodsListData(value){
  return (dispatch)=>{
    fetch(`/napi/buy/inventory/list/by_datasource/?sort_by=&sort_type=desc&limit=10&start=0&filter_id=${value}&timestamp=1497533391000`)
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      // console.log(data.data.object_list);
      dispatch({type:'getGoodsListData',payload:{
        goodsListData:data.data.object_list
      }})
    })
  }
}

var mapStateToProps =(state)=>{//数据回传
  return {goodsListData:state.goToDetailReducer.goodsListData}
}
export default connect(mapStateToProps)(GridListDetail)
