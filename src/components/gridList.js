import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {Grid} from "antd-mobile";
import { hashHistory } from 'react-router'
 class GridList extends Component {
 	  state = {
        gridData:[]
    }
    componentDidMount() {
      fetch("/napi/buy/category/list/?timestamp=1497353874000")
   		.then((res)=>{
   			return res.json()
   		})
   		.then((data)=>{
   		// 	console.log(data.data.object_list)
   			this.setState({
          gridData: data.data.object_list
      	});
   		})
    }

    goToDetail(id,value,name){
       hashHistory.push(`/gridDetail/${id}/${value}/${name}`)
      //  console.log(id,value);
    }

   	render(){
  		return <Grid data={this.state.gridData} columnNum={4} hasLine={false}
            renderItem={(dataItem, index) => (
  	        <div style={{ margin: '0.16rem', textAlign: 'center' }}
            onClick={()=>this.goToDetail(dataItem.id,dataItem.value,dataItem.name)}>
  	        	<img src="" style={{ width: '80%', margin: '0.12rem' }} alt="icon" />
  	          <div style={{ padding: '0.08rem' }}>
  	            <span>{dataItem.name}</span>
  	          </div>
  	        </div>
  	      )}/>
      }
   }
  //  <img src={dataItem.background_img} style={{ width: '80%', margin: '0.12rem' }} alt="icon" />

export default GridList
