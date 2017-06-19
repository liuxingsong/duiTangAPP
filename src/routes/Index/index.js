import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./index.css"
import {NavBar,Icon,Carousel, WhiteSpace, WingBlank,List,TextareaItem } from "antd-mobile";

import { Tabs} from 'antd-mobile';
import {connect} from  "react-redux"
import fetchJsonp from "fetch-jsonp"

import {Link}  from "react-router"


const Item = List.Item;
const Brief = Item.Brief;
const TabPane = Tabs.TabPane;


//tab部分
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const TabListData = [
		{	
			name:"美容时尚",
			neirong:{txt:"羡慕她们牛仔裤穿的美，其实你只是鞋子没选对",url:"https://b-ssl.duitang.com/uploads/item/201603/05/20160305191630_QSGfw.thumb.400_0.jpeg"}
		},
		{	
			name:"美食手札",
			neirong:{txt:"这样的水煮鱼，低热量超健康！",url:"https://b-ssl.duitang.com/uploads/blog/201504/11/20150411165439_WBXKZ.thumb.400_0.jpeg"}
		},
		{
			name:"时尚街拍",
			neirong:{txt:"没有文字，街拍街拍",url:"https://b-ssl.duitang.com/uploads/item/201511/05/20151105184527_uXVQe.thumb.400_0.jpeg"}
		},
		{
			name:"绘画手作",
			neirong:{txt:"PS数码绘画过程！",url:"https://b-ssl.duitang.com/uploads/item/201609/28/20160928152514_vArHZ.thumb.400_0.jpeg"}
		},
		{
			name:"婚纱婚礼",
			neirong:{txt:"婚纱婚礼，婚纱摄影！",url:"https://b-ssl.duitang.com/uploads/item/201612/07/20161207151353_eEvXB.thumb.400_0.jpeg"}
		}]
const makeTabPane1 = (key) => (
		<TabPane tab={`${TabListData[key].name}`} key={key}>
	    <div className={style.tab}>
        <dl>
	    		<dt><img src={TabListData[key].neirong.url} /></dt>
	    		<dd>{TabListData[key].neirong.txt}</dd>
	    	</dl>
	    </div>
	  </TabPane> 
);
const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push(makeTabPane1(i));
  }
  return result;
};

const TabExample = () => (
  <div>
    <Tabs defaultActiveKey="1" onChange={callback} pageSize={3} onTabClick={handleTabClick}>
      {makeMultiTabPane(4)}
    </Tabs>
    <WhiteSpace />
  </div>
);

//轮播部分
class Index extends Component {
    state = {
        data: ['', '', ''],
        initialHeight: 500,
    }
    componentDidMount() {
    // simulate img loading
    //模拟数据获取
        setTimeout(() => {
            this.setState({
//              data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
              data: ['0490c2357f5e4c2da9ed5f80d6920d05', '8c6e50d09e8fb3b20386655753a0fdf2', '2e53991289361efa9c7f74524db088a3'],
            });
        }, 100);
   }
    render(){
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        
        return (
            <div>
             	<NavBar 
               iconName={false}
                mode="light"
//              onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
              >堆糖APP</NavBar>

              <div className={style.content}>
                <Carousel
                    className={style['my-carousel']}
                    autoplay={true}
                    infinite
                    selectedIndex={0}
                    swipeSpeed={35}
//                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//                  afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(ii => (
                        <a href="http://www.baidu.com" key={ii} style={hProp}>
	                        <img
	                     			src={`https://pic.maizuo.com/h5PicUpload/${ii || 'QcWDkUhvYIVEcvtosxMF'}.jpg`}
	                            alt="icon"
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
              	<TabExample />
                <WingBlank>
                    <List renderHeader={() => '堆糖App'}>
                        <Item extra={'内容内容'}>堆糖专题</Item>
                        <Link to={`/detailCon`}>
	                        <Item arrow="horizontal" multipleLine className={style.txtItem}>
	                            美容美妆<p>去哪获取文字呢去哪获取文字呢去哪获取文字呢去哪获取文字呢去哪获取文字呢</p>
	                        </Item>
                        </Link>
	                    	<Link to={`/detailCon`}>
	                    		<Item arrow="horizontal" multipleLine className={style.txtItem}>
	                    			美食手札<p>中国美食多如牛毛,这次的美食吃货带你品尝...</p>
	                    		</Item>
	                    	</Link>
                        <Link to={`/detailCon`}>
                        	<Item arrow="horizontal" multipleLine className={style.txtItem}>
                            街拍美景<p>去哪获取文字呢去哪获取文字呢去哪获取文字呢去哪获取文字呢去哪获取文字呢</p>
                       		</Item>
                        </Link>
                        <Link to={`/detailCon`}>
	                        <Item arrow="horizontal" multipleLine className={style.txtItem}>
	                            婚纱婚礼<p>去哪获取文字呢去哪获取文字呢去哪获取文字呢去哪获取文字呢去哪获取文字呢</p>
	                        </Item>
												</Link>
                    </List>
                </WingBlank>
              </div>
            </div>
        )
    }
    
}


export default Index;