import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {hashHistory} from 'react-router'
import style from "./goodsDetail.css";
import {NavBar,Icon} from "antd-mobile";
// import BannerImg from '../../components/bannerImg'

class GoodsDetailPage extends Component {
    state={
      goodsDetailMsg:[]
    }
    back() {
      hashHistory.push(`/shopping`)
    }
		render(){
      var {goodsDetailMsg} = this.props
      return (
          <div className={style['goodsDetailPage']}>
            <NavBar leftContent="商品详情" mode="light"
               className='navBar'
               rightContent={[<Icon type='ellipsis'/>]}
               onLeftClick={() => this.back()}
            ></NavBar>
            <div className={style['content']}>
              <div className={style['showImg']}>
                <img src={goodsDetailMsg.main_pic} />
              </div>
              <div className={style['priceMsg']}>
                <span></span>
                <span>￥ {goodsDetailMsg.market_price}</span>
                <span>已售 8</span>
              </div>
              <div className={style['endTime']}>
                <div><b>会员价</b> <span>￥</span></div>
              </div>
              <div className={style['detailMsg']}>
                <p>{goodsDetailMsg.caption}</p>
                <h3>{goodsDetailMsg.name}</h3>
                <span>{goodsDetailMsg.desc}</span>
              </div>
            </div>
          </div>
      )}

      componentDidMount(){
        console.log(this.props.params.id);
         this.props.dispatch(getGoodsDetailMsg(this.props.params.id))
       }
}
function getGoodsDetailMsg(id){
  return (dispatch)=>{
    fetch(`/napi/buy/spu/detail/?inventory_id=${id}&timestamp=1497684378000`)
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.data);
      dispatch({type:'getGoodsDetailMsg',payload:{
        goodsDetailMsg:data.data
      }})

    })
  }
}

var mapStateToProps = (state)=>{//数据回传
  return {
    goodsDetailMsg:state.goodsDetaiLReducer.goodsDetailMsg
  }
}

export default connect(mapStateToProps)(GoodsDetailPage)
