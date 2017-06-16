import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./bannerImg.css";
import {Carousel} from "antd-mobile";


class BannerImg extends Component {
	state = {
        navBardata: [{imgs:"http://tse4.mm.bing.net/th?id=OIP.Sku6ii7MHbkGN31cD7rJggEsC7&w=300&h=187&c=7&qlt=90&o=4&pid=1.7"},
	      {imgs:"http://tse3.mm.bing.net/th?id=OIP.Xu1Xs187VFhQGBzKqNmeFgEsC7&w=293&h=183&c=7&qlt=90&o=4&pid=1.7"},
	      {imgs:"http://tse2.mm.bing.net/th?id=OIP.dHfiHbX0d0Red8wxCeJWjwEsDh&w=282&h=206&c=7&qlt=90&o=4&pid=1.7"}
	      ],
        initialHeight: 200,
  	}
    componentDidMount() {
    // simulate img loading
    //模拟数据获取
    setTimeout(() => {
    	this.state = {
	      navBardata: [{imgs:"http://tse4.mm.bing.net/th?id=OIP.Sku6ii7MHbkGN31cD7rJggEsC7&w=300&h=187&c=7&qlt=90&o=4&pid=1.7"},
	      {imgs:"http://tse3.mm.bing.net/th?id=OIP.Xu1Xs187VFhQGBzKqNmeFgEsC7&w=293&h=183&c=7&qlt=90&o=4&pid=1.7"},
	      {imgs:"http://tse2.mm.bing.net/th?id=OIP.dHfiHbX0d0Red8wxCeJWjwEsDh&w=282&h=206&c=7&qlt=90&o=4&pid=1.7"}
	      ],
			}
    }, 100);
   }

    render(){
    	const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
  		return  <Carousel
			 className={style['my-carousel']}
			 autoplay={false}
			 infinite
			 selectedIndex={1}
			 swipeSpeed={35}
			 beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
			 afterChange={index => console.log('slide to', index)}
			 >
			 {this.state.navBardata.map(ii => (
			     <a href="http://www.baidu.com" key={ii} style={hProp}>
			     <img
			         src={ii.imgs}
			         alt="icon"
			         className={style['photos']}
			         onLoad={() => {
			         // fire window resize event to change height
			         window.dispatchEvent(new Event('resize'));
			                 this.setState({
			                     initialHeight: null,
			                 });
			             }}
			         />
			    </a>

		     ))}
	 </Carousel>
    }
}
 export default BannerImg
