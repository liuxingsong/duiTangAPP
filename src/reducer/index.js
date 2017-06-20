
const specialColumnReducer = (state={specialColumnData:[],total:1000},action)=>{

    switch(action.type){
        case "getSpecialColumnData" :
          return Object.assign({},state,{
            specialColumnData:action.payload.specialColumnData,
            total:action.payload.total
          });
        case "getSpecialColumnMoreData":
          return  Object.assign({},state,{
            specialColumnData:state.specialColumnData.concat(action.payload.specialColumnData),
            total:action.payload.total
          });
        break;
        default :
        return state
    }
}
const goToDetailReducer = (state={ goodsListData:[]},action)=>{

    switch(action.type){
        case "getGoodsListData" :
          return Object.assign({},state,{
            goodsListData:action.payload.goodsListData

          });
        default :
        return state
    }
}

const cartReducer = (state={cartData:[1,2,3],allSelected:false},action)=>{
    switch(action.type){
        case "CART_INIT_DATA" :
            return Object.assign({},state,action.payload);
        case "CART_CHANGE_NUM" :
            const {index,num} = action.payload;
            var newState = JSON.parse(JSON.stringify(state)); //深拷贝
            newState.cartData[index].number = num; //改变数据里的number
            return newState;
        case "CART_DEL_ITEM" :
            var newState = JSON.parse(JSON.stringify(state));//深拷贝
            newState.cartData.splice(action.payload.index,1) ;//删除下标为action.payload.index的数据
            return newState;
        //单选被点击
        case "CHANGE_ITEM_SELECTED" :
            var  index = action.payload.index; //保存下标
            var newState = JSON.parse(JSON.stringify(state));//深拷贝
            //让自己的状态取反
            var newSelected = !newState.cartData[index].selected
            newState.cartData[index].selected=newSelected
            if(!newSelected){
                //如果自己为false，那么全选也为false
                newState.allSelected=false
            }else{
                //如果自己为true，假设全选也为true
                newState.allSelected=true
                newState.cartData.forEach(e=>{
                    //循环所有的选项，如果有一个没有被选中，全选就为false
                    if(!e.selected){
                        newState.allSelected=false
                    }
                })
            }
            return newState;
        //全选被点击
        case "CHANGE_All_SELECTED" :
            var newState = JSON.parse(JSON.stringify(state));//深拷贝
            newState.allSelected=!newState.allSelected;//全选取反
            //让所有的选中和全选同步
            newState.cartData.forEach(e=>{
                e.selected = newState.allSelected
            });
            return newState;
        default :
            return state
    }
};
const loginReducer = (state={usename:"",usepassword:"",loginState:false},action)=>{
    switch(action.type){
        case "SET_PASSWORD" :
            const {password} = action.payload;
            return Object.assign({},state,{
                usepassword:password
            });

        case "SET_NAME" :
            const {name} = action.payload;
            return Object.assign({},state,{
                usename:name
            });

        case "SET_STATE" :
            const {loginStates} = action.payload;
            return Object.assign({},state,{
                loginState:loginStates
            });
        default :
            return state
    }
};
export {specialColumnReducer,goToDetailReducer,cartReducer,loginReducer}
