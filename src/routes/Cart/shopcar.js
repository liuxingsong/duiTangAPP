import React,{Component} from 'react';
import {Link} from 'react-router'
import fetchJsonp from 'fetch-jsonp';
import {connect} from 'react-redux';
import style from "./shopcar.css"
import {Flex,SwipeAction, Toast,List,Stepper,Checkbox } from "antd-mobile";
import config from "../../config/index"
import "antd-mobile/lib/stepper/style/assets/plus.svg"
import "antd-mobile/lib/stepper/style/assets/minus.svg"


const CartList =({cartData,dispatch})=>{

    return (
        <ul className={style['cart-list']}>
            {
                cartData.map((rowData,i)=><li key={i}>
                    <SwipeAction
                        style={{ backgroundColor: 'gray' }}
                        autoClose
                        right={[
                            {
                                text: 'Cancel',
                                onPress: () => console.log('cancel'),
                                style: { backgroundColor: '#ddd', color: 'white' },
                            },
                            {
                                text: 'Delete',
                                onPress: () => {
                                    //派发 删除的 actioncreator(异步action)
                                    dispatch(removeItemAction(rowData.goodsID,i))
                                },
                                style: { backgroundColor: '#F4333C', color: 'white' },
                            },
                        ]}
                        onOpen={() => console.log('global open')}
                        onClose={() => console.log('global close')}
                    >
                        <Flex  className={style['cart-item']}>
                            <Checkbox checked={rowData.selected}
                            style={{position:"absolute",right:'10px',top:"10px"}}
                             onChange={()=>{
                                //派发 单选的 action
                                dispatch({
                                    type:"CHANGE_ITEM_SELECTED",
                                    payload:{index:i}
                                })
                            }} />
                            <a className={style.pic}><img src={rowData.goodsListImg}/></a>
                            <Flex.Item>
                                <p style={{width:"70%"}}>{rowData.goodsName}</p>
                                <p>{rowData.price}</p>
                                <div>
                                    <Stepper
                                        style={{ width: '25%', minWidth: '2rem',position:"absolute",right:'10px',bottom:'5px' }}
                                        showNumber
                                        max={100}
                                        min={1}
                                        useTouch={false}
                                        value={rowData.number}
                                        onChange={(num)=>{
                                            //派发 数量改变的 actioncreator(异步action)
                                            dispatch(changeCartNum(rowData.goodsID,i,num))
                                        }}
                                    />
                                </div>
                            </ Flex.Item>
                        </Flex>
                    </SwipeAction>
                </li>)
            }
        </ul>
    )
};

class Cart extends Component {
    render(){
        const {cartData,allSelected,dispatch} = this.props;
        const total = this.getTotal(cartData); //获取总数量和金额
        return (
            <div className="cart-page">
                {/*<NavBar*/}
                    {/*iconName={null}*/}
                    {/*leftContent={*/}
                        {/*<Checkbox checked={allSelected}  onChange={()=>{*/}
                            {/*//派发全选的action*/}
                            {/*dispatch({ type:"CHANGE_All_SELECTED"})*/}
                        {/*}} />*/}
                    {/*}*/}
                    {/*mode="light"*/}
                    {/*onLeftClick={() => console.log('onLeftClick')}*/}
                    {/*rightContent={[*/}
                        {/*<Icon key="0" type={require("../../svg/icon-core/map.svg")} />*/}
                    {/*]}*/}
                {/*>购物车 {total.num};{total.price}</NavBar>*/}
                <header className="Login-header" style={{color:"#108ee9",fontSize:"16px"}}><Link to="/shopping"
                  className="iconfont Login-return"
                  style={{color:"#108ee9",fontSize:"22px"}}
                >&#xe65a;</Link>购物车</header>
                <Stepper style={{display:"none" }}/>
                <CartList cartData={cartData} dispatch={dispatch} />
                <footer className="shop-car-footer">
                    <span className="iconfont choose-all">&#xe7c4;</span>全选
                    <a href="javascript:;" className="shop-car-end">结算</a>
                    <div className="shop-car-price">
                        <p className="shop-car-one">商品总计：<span className="shop-car-allprice">￥0.00</span></p>
                        <p className="shop-car-two">不含邮费</p>
                    </div>
                </footer>
            </div>
        )
    }
    componentDidMount(){
        //获取初始数据
        this.props.dispatch(getCartData())
    }
    getTotal(data){
        var num = 0;
        var price = 0;
        // console.log(data);
        //循环计算总数量，金额
        data.forEach(e=>{
            //如果li被选中 才会计算它的金额和数量
            if(e.selected){
                num+=e.number*1;
                price+=e.number*e.price
            }
        });
        return {num,price}
    }
}
//获取购物车数据
const getCartData =()=>dispatch=>{
    Toast.loading('加载中...');
    return fetchJsonp(`${config.serverUrl}/getCar.php?userID=huazai`,{timeout:20000})
        .then(res=>res.json())
        .then(data=>{
            data.forEach(function(ele) {
                //生成初始的 选中状态
                ele.selected = false
            });
            Toast.hide()
            //派发action
            dispatch({type:"CART_INIT_DATA",payload:{cartData:data}})
        })
        .catch(e=>console.log(e));
};

//修改数据
const changeCartNum=(id,index,num)=>dispatch=>{
    Toast.loading('加载中...');
    return fetch(`${config.serverUrl}/updatecar.php?userID=huazai&goodsID=${id}&number=${num}`,{timeout:10000})
        .then(res=>res.json())
        .then(data=>{
            Toast.hide()
            //派发action
            dispatch({type:"CART_CHANGE_NUM",payload:{index,num}})
        })
        .catch(e=>console.log(e))
};
//删除
const removeItemAction =(id,index)=>dispatch=>{
    Toast.loading('加载中...');
    return fetch(`${config.serverUrl}/updatecar.php?userID=huazai&goodsID=${id}&number=0`,{timeout:10000})
        .then(res=>res.json())
        .then(data=>{
            Toast.hide();
            //派发action
            dispatch({type:"CART_DEL_ITEM",payload:{index}})
        })
        .catch(e=>console.log(e))
};
export default connect((state)=>{
    return {
        allSelected:state.cartReducer.allSelected,
        cartData:state.cartReducer.cartData
    }
})(Cart)

// const LoginIndex =()=>{
//     return <div className="shop-car-box">
//         <header className="Login-header"><Link to="/cart" className="iconfont Login-return">&#xe65a;</Link>购物车</header>
//         <div className="shop-car-index">
//
//         </div>
//         <footer className="shop-car-footer">
//             <span className="iconfont choose-all">&#xe7c4;</span>全选
//             <a href="javascript:;" className="shop-car-end">结算</a>
//             <div className="shop-car-price">
//                 <p className="shop-car-one">商品总计：<span className="shop-car-allprice">￥0.00</span></p>
//                 <p className="shop-car-two">不含邮费</p>
//             </div>
//         </footer>
//     </div>
// };

// class LoginPage extends Component{
//     render(){
//         return <div>
//             <LoginIndex/>
//         </div>
//     }
// }
//
// export default LoginPage
