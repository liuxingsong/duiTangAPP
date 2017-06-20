import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import style from "./topic.css";


class Topic extends Component {
	state = {
			topicData:['1'],
			topicDatatwo:['2'],
      topicDatathree:['3']
  	}
    componentDidMount() {
   		fetch("/napi/buy/index/popular/list/?limit=11&start=4&timestamp=1497354943000")
   		.then((res)=>{
   			return res.json()
   		})
   		.then((data)=>{
   			this.setState({
          topicData: data.data.object_list
      	});
   		})
			// fetch("/napi/buy/index/popular/list/?limit=1&start=3&timestamp=1497354943000")
   		// .then((res)=>{
   		// 	return res.json()
   		// })
   		// .then((data)=>{
          //
   		// 	this.setState({
          // topicDatatwo: data.data.object_list[0].column_list
      	// });
   		// })
			fetch("/napi/buy/index/popular/list/?limit=3&start=0&timestamp=1497354943000")
   		.then((res)=>{
   			return res.json()
   		})
   		.then((data)=>{

   			this.setState({
          topicDatathree: data.data.object_list
      	});
   		})
   	}

    render(){
  		return <div className={style['topic']}>
  			<h2 className={style['topicTitle']}>-专题-</h2>

				<div className={style['topicList']} id="topicListThree">
				{
					this.state.topicDatathree.map((ele,index)=>{
						return <div key={index}>
							<div className={style['topicClass']}>
								<img src=""/>
								<span>{ele.stitle}</span>
								<h1>{ele.description}</h1>
								<a href="#">查看详情</a>
							</div>
							<div className={style['goodsList']}>
								<ul>
								{
									ele.inventory_list&&ele.inventory_list.map((el,indx)=>{
											if(indx<=7){
												return <li key={indx}>
												<img src=""/>
												<p>{el.inventory_caption}</p>
												<span>${el.origin_price}</span>
												</li>
											}
										})
								}
								<div className={style['seeMore']}>查看更多</div>
								</ul>
							</div>
						</div>
					})
				}
				</div>

				{/*<div className={style['columnList']} id="topicListTwo">*/}
					{/*<div className={style['columnContent']}>*/}
						{/*<ul>*/}
							{/*{*/}
									{/*this.state.topicDatatwo.map((ele,index)=>{*/}
										{/*return <li key={index}>*/}

											{/*<img src=""/>*/}
											{/*<span>{ele.columnName}</span>*/}
											{/*<h4>{ele.title}</h4>*/}
										{/*</li>*/}
								 {/*})*/}
							{/*}*/}
							{/*<div className={style['seeMore']}>查看更多</div>*/}
						{/*</ul>*/}
					{/*</div>*/}
				{/*</div>*/}


	  		<div className={style['topicList']} id="topicListOne">
	  		{
	  			this.state.topicData.map((ele,index)=>{
	  				return <div key={index}>
	  					<div className={style['topicClass']}>

		  					<img src=""/>
		  					<span>{ele.stitle}</span>
		  					<h1>{ele.description}</h1>
		  					<a href="#">查看详情</a>
		  				</div>
		  				<div className={style['goodsList']}>
		  					<ul>
			  				{
									ele.inventory_list&&ele.inventory_list.map((el,indx)=>{
											if(indx<=7){
												return <li key={indx}>

												<img src=""/>
												<p>{el.inventory_caption}</p>
												<span>${el.origin_price}</span>
												</li>
											}
										})
			  				}
		  					<div className={style['seeMore']}>查看更多</div>
		  					</ul>
		  				</div>
	  				</div>
	  			})
	  		}
	  		</div>

  		</div>

    }
}
// <img src={ele.image_url}/>
// <img src={el.pictures[0]}/>
// 	<img src={ele.img}/>
// 	<img src={ele.image_url}/>
// <img src={el.pictures[0]}/>
 export default Topic
