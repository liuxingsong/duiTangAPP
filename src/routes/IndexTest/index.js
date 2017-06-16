import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./index.css"
import {NavBar,Icon,Carousel, WhiteSpace, WingBlank,List} from "antd-mobile";
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `name${i}`,
}));
// console.log(data)

const Item = List.Item;
const Brief = Item.Brief;

class Index extends Component {
    state = {
        data: ['', '', ''],
        initialHeight: 200,
    }
    componentDidMount() {
    // simulate img loading
    //模拟数据获取
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
   }

    render(){
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};

        return (
            <div>
                 <NavBar
                   iconName={false}
                   className='navBar'
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >NavBar</NavBar>

                 <div className={style.content}>
                    <Carousel
                        className={style['my-carousel']}
                        autoplay={false}
                        infinite
                        selectedIndex={1}
                        swipeSpeed={35}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(ii => (
                            <a href="http://www.baidu.com" key={ii} style={hProp}>
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
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

                        <Grid data={data} columnNum={4} hasLine={false}  />



                    <WingBlank>
                        <List renderHeader={() => '基本样式'}>
                            <Item extra={'内容内容'}>标题文字</Item>
                            <Item arrow="horizontal" multipleLine>
                                标题文字 <Brief>副标题</Brief>
                            </Item>
                            <Item arrow="horizontal" multipleLine>
                                标题文字
                            </Item>
                            <Item
                                arrow="horizontal"
                                multipleLine
                                onClick={() => {}}
                                platform="android"
                            >
                            ListItem （Android）<Brief>设置了Click事件会有material水波纹点击效果</Brief>
                            </Item>
                        </List>
                    </WingBlank>

                 </div>
            </div>
        )
    }

}

export default Index
