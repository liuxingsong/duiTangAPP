import React from 'react';
import ReactDOM from 'react-dom';


import {Provider} from "react-redux"
import {Route,Router,hashHistory,IndexRoute} from "react-router"
import store from "./config/store"

import Index from './routes/Index';
import ProductList from './routes/ProductList';
import Shopping from './routes/Shopping';
import Home from './routes/Home';

import SpecialColumn from './routes/Shopping/specialColumn';
import GridListDetail from './routes/Shopping/gridListDetail';
import GoodsDetailPage from './routes/Shopping/goodsDetail'
import NewGoodsPage from './routes/Shopping/newGoods'

import Mine from './routes/Mine/mine';
import Nologn from './routes/Logn/nologn';
import Register from './routes/Logn/register';
import Login from './routes/Logn/logn';
import Shopcar from './routes/Cart/shopcar';
import Order from './routes/Mine/order';

import DetailConPage from './routes/DetailCon';

const App = ()=>{
    return <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Index} />
                <Route path="list" component={ProductList } />
                <Route path="shopping" component={Shopping } />
                <Route path="nologn" component={Nologn}/>
            </Route>

            <Route path="/specialColumn" component={SpecialColumn}/>
            <Route path="/gridDetail(/:id)(/:value)(/:name)" component={GridListDetail}/>
            <Route path="/goodsDetail(/:id)" component={GoodsDetailPage}/>
            <Route path="/newGoods" component={NewGoodsPage}/>

            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/shopcar" component={Shopcar}/>
            <Route path="/order" component={Order}/>

            <Route path="/detailCon" component={DetailConPage} />
        </Router>
    </Provider>
}

ReactDOM.render(<App/>, document.getElementById('root'));
