import React,{Component} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import style from "./index.css"
import {NavBar,Icon,List} from "antd-mobile";


const Item = List.Item;
const Brief = Item.Brief;

class Index extends Component {

    render(){

        return (
            <div>
                <NavBar
                    iconName={false}
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    <Link to="shopcar">    购物车</Link>
                </NavBar>



            </div>
        )
    }

}

export default Index