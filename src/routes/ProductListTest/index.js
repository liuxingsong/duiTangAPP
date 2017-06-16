import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import style from "./index.css"
import {NavBar,Icon,ListView,RefreshControl} from "antd-mobile";


const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
   {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
   {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

const row = (rowData, sectionID, rowID) => {

      return (
        <div key={rowID}
          style={{
            padding: '0.08rem 0.16rem',
            backgroundColor: 'white',
          }}
        >{rowData.title}</div>
      )
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(data),
      refreshing: false,
    };
  }

  onRefresh = () => {
    console.log('onRefresh');
    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 1000);
  };
    render(){

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
                    >商品列表</NavBar>

                   <ListView
                    dataSource={this.state.dataSource}
                    renderRow={row}
                    initialListSize={5}
                    pageSize={5}
                    style={{
                    height: document.documentElement.clientHeight,
                    border: '1px solid #ddd',
                    margin: '0.1rem 0',
                    }}
                    scrollerOptions={{ scrollbars: true }}
                    refreshControl={<RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    />}
                />

            </div>
        )
    }

}

export default ProductList
