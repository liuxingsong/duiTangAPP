import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import style from "./specialColumn.css";
import {NavBar,Icon,ListView,RefreshControl,Toast} from "antd-mobile";


const RenderRow = (contentData) => {
  return <div className={style['contentList']}>
    <img src=''/>
		<p>{contentData.title}</p>
		<span>{contentData.desc}</span>
	</div>
}

class SpecialColumn extends Component {
		state={
      title:"专题",
      pageNum:1,
      refreshing:false
    }

		render(){
      const {specialColumnData} = this.props
      const ds = new ListView.DataSource({
        rowHasChanged:(row1,row2)=>row1 !== row2
      })
      const dataSource = ds.cloneWithRows(specialColumnData)
      return (
          <div>
               <NavBar
  								leftContent={this.state.title}
                  className='navBar'

                  mode="light"
                  onLeftClick={() => console.log('onLeftClick')}
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
      this.props.dispatch(getSpecialColumnData(()=>{
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
      this.props.dispatch(getSpecialColumnMoreData(num,()=>{this.loading=false;Toast.hide()}))
    }

    componentDidMount(){
      this.props.dispatch(getSpecialColumnData())
    }
}

const getSpecialColumnMoreData =(num,callback)=>{//获取更多数据
  return (dispatch)=>{
    return fetch(`/napi/column/detail/by_heap_name/?heap_name=%E4%B8%93%E6%A0%8F_%E6%9C%89%E6%96%99&start=${num*5}&limit=5&timestamp=1497427089000`,{timeout:'10000'})
  .then((res)=>{
    return res.json()
  }).then((data)=>{
    callback()
    dispatch({
      type:"getSpecialColumnMoreData",
      payload:{
        total:data.data.total,
        specialColumnData:data.data.object_list
      }
    })
  })
}}

const getSpecialColumnData = (callback)=>{//首次渲染数据
  return (dispatch)=>{
    return fetch("/napi/column/detail/by_heap_name/?heap_name=%E4%B8%93%E6%A0%8F_%E6%9C%89%E6%96%99&start=0&limit=4&timestamp=1497427089000",{timeout:'10000'})
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      callback&&callback()
      dispatch({type:'getSpecialColumnData',payload:{
        total:data.data.total,
        specialColumnData:data.data.object_list
      }})
    })
  }
}

var mapStateToProps = (state)=>{//数据回传
  return {
    specialColumnData:state.specialColumnReducer.specialColumnData,
    total:state.specialColumnReducer.total
  }
}

 export default connect(mapStateToProps)(SpecialColumn)
