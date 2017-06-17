import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router'
import style from "./newGoods.css";
import {NavBar,Icon,ListView,RefreshControl,Toast} from "antd-mobile";


const RenderRow = (contentData) => {
  return <div className={style['contentList']}>
    <img src=''/>
		<p>{contentData.title}</p>
		<span>{contentData.desc}</span>
	</div>
}

class NewGoodsPage extends Component {
		state={
      title:"新品速递",
      pageNum:1,
      refreshing:false
    }
    back() {
      hashHistory.push(`/shopping`)
    }
		render(){
      const {newGoodsData} = this.props
      const ds = new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1 !== row2
      })
      const dataSource = ds.cloneWithRows(newGoodsData)
      return (
          <div>
               <NavBar
  								leftContent={this.state.title}
                  className='navBar'

                  mode="light"
                  onLeftClick={() => this.back()}
                ></NavBar>

                 <ListView
                  style={{
                    height:document.documentElement.clientHeight-(45*window.devicePixelRatio/2),
										top:'45px',
                    background:'#e6e6e6'
                  }}
                  initialListSize={5}
                  pageSize={5}
                  dataSource={dataSource}
                  useZscroller={true}
                  renderRow={RenderRow}
                  scrollerOptions={{ scrollbars: true }}
									renderFooter={()=><div style={{width:'100%',textAlign:'center'}}>Footer</div>}

                  onEndReached={()=>this.getMore()}
                  onEndReachedThreshold={10}
                  refreshControl={<RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={()=>{this.onRefresh()}}
                  />}
                />
          </div>
      )
  }
  onRefresh(){
      this.setState({ refreshing: true });
      this.props.dispatch(getNewGoodsData(()=>{
        this.setState({
          pageNum:1,
          refreshing: false
        });
      }))
  }

    getMore(){
      var num = this.state.pageNum
      if (num*5 >= 24) { return }
      if (this.loading) { return }
      this.loading =true
      Toast.loading('Loading...',1)
      this.setState({
        loading:true,
        pageNum:++num
      })
      this.props.dispatch(getNewGoodsMoreData(num,()=>{this.loading=false;Toast.hide()}))
    }

    componentDidMount(){
      this.props.dispatch(getNewGoodsData())
    }
}

const getNewGoodsMoreData =(num,callback)=>{//获取更多数据
  return (dispatch)=>{
    return fetch(`/napi/column/detail/by_heap_name/?heap_name=%E4%B8%93%E6%A0%8F_%E6%9C%89%E6%96%99&start=${num*5}&limit=5&timestamp=1497427089000`,{timeout:'10000'})
  .then((res)=>{
    return res.json()
  }).then((data)=>{
    callback()
    dispatch({
      type:"getNewGoodsMoreData",
      payload:{
        total:data.data.total,
        newGoodsData:data.data.object_list
      }
    })
  })
}}

const getNewGoodsData = (callback)=>{//首次渲染数据
  return (dispatch)=>{
    return fetch("/napi/column/detail/by_heap_name/?heap_name=%E4%B8%93%E6%A0%8F_%E6%9C%89%E6%96%99&start=0&limit=4&timestamp=1497427089000",{timeout:'10000'})
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      callback&&callback()
      dispatch({type:'getNewGoodsData',payload:{
        total:data.data.total,
        newGoodsData:data.data.object_list
      }})
    })
  }
}

var mapStateToProps = (state)=>{//数据回传
  return {
    newGoodsData:state.specialColumnReducer.newGoodsData,
    total:state.specialColumnReducer.total
  }
}

 export default connect(mapStateToProps)(NewGoodsPage)
