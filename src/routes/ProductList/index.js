import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./index.css"
import {NavBar,Icon,ListView,RefreshControl,Tabs, WhiteSpace,Grid} from "antd-mobile";
import {Link}  from "react-router"

const GridProducListData = [
	{img:"https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png",name:"堆糖class"},
	{img:"https://b-ssl.duitang.com/uploads/item/201603/05/20160305191630_QSGfw.thumb.400_0.jpeg",name:"美容美妆"},
	{img:"https://a-ssl.duitang.com/uploads/item/201506/22/20150622125528_cHydX.thumb.400_0.jpeg",name:"美发造型"},
	{img:"https://b-ssl.duitang.com/uploads/item/201511/05/20151105184527_uXVQe.thumb.400_0.jpeg",name:"时尚街拍"},
	{img:"https://b-ssl.duitang.com/uploads/blog/201504/11/20150411165439_WBXKZ.thumb.400_0.jpeg",name:"美食菜谱"},
	{img:"https://b-ssl.duitang.com/uploads/item/201611/30/20161130081338_s2EnM.thumb.400_0.jpeg",name:"手工DIY"},
	{img:"https://b-ssl.duitang.com/uploads/item/201609/28/20160928152514_vArHZ.thumb.400_0.jpeg",name:"插画绘画"},
	{img:"https://b-ssl.duitang.com/uploads/item/201704/02/20170402002529_Krd5k.thumb.400_0.jpeg",name:"家居生活"},
	{img:"https://b-ssl.duitang.com/uploads/item/201606/09/20160609151021_CfKkh.thumb.400_0.jpeg",name:"旅行"},
	{img:"https://b-ssl.duitang.com/uploads/item/201612/07/20161207151353_eEvXB.thumb.400_0.jpeg",name:"婚纱婚礼"},
	{img:"https://b-ssl.duitang.com/uploads/item/201706/13/20170613100704_3nsuM.thumb.400_0.jpeg",name:"萌宠"},
	{img:"https://b-ssl.duitang.com/uploads/item/201706/08/20170608110231_CuHry.thumb.400_0.jpeg",name:"头像表情"}
]


const data = Array.from(new Array(12)).map((_val, i) => ({
  icon: `${GridProducListData[i].img}`,
  text: `${GridProducListData[i].name}`,
}));

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const TabExample = () => (
  <div>
    <Tabs className="tabs1" defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab="内容" key="1" className={style.proTabName}>
        <div className={style.proTabConent}>
        	
		    <Grid data={data} columnNum={3} hasLine={false} onClick={(ele, index) => alert(GridProducListData[index].name)}/>
          
        </div>
      </TabPane>
      <TabPane tab="社区" key="2" className={style.proTabName}>
        <div className={style.proTabCommonity}>
        	{
            <ul>
                {
            	GridProducListData.map((ele,index)=><li key={index}>
            		<Link to={`/detailCon`}>
            			<img src={ele.img} />
            		</Link>
            		<p>{ele.name}</p>
            	</li>)
                }
            </ul>
        	}
        </div>
      </TabPane>
      <TabPane tab="关注" key="3" className={style.proTabName}>
        <div className={style.proTabAttention}>
          选项卡三内容
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
);

class ProductList extends Component {
	render(){
		return(
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
			    <div className={style.proTab}><TabExample /></div>
			      
			</div>
		)
	}
}

export default ProductList