import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./index.css"
import {NavBar,Icon,List,Carousel,WingBlank,Grid} from "antd-mobile";
import {Link} from 'react-router'
import GridList from "../../components/gridList"
import BannerImg from "../../components/bannerImg"
import WeekNews from "../../components/weekNews"
import Topic from "../../components/topic"
import Chosen from "../../components/chosen"

class Index extends Component {

    render(){
        return (
            <div className={style['shoppingPage']}>
                 <NavBar leftContent="堆糖商店"
                 className='navBar'
                    iconName={false}
                    mode="light"
                    rightContent={[

                        <Link to={'/shopcar'}>购物车</Link>
                    ]}
                  ></NavBar>
                  <div className={style.content}>
										<BannerImg/>
										<GridList/>
										<WeekNews/>
										<Topic/>
                    <Chosen/>
                  </div>
            </div>
        )
    }
}

export default Index
