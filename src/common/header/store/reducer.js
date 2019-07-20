import * as constans from './constans'
// immutable对象的set方法，会结合之前的inmmutable对象的值
// 和设置的值，返回一个全新的对象
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focus:null,             //搜索框焦点是否获取
    mouseIn:false,          //鼠标是否划入
    contentList:[],         //推荐项
    page:1,                 //推荐项当前页
    totalPage:1             //推荐项总页
})
export default (state = defaultState , action) => {
    switch(action.type) {
        case constans.LOSE_FOCUS:
            return state.set('focus',false);
        case constans.GET_FOCUS:
            return state.set('focus',true);
        case constans.GET_DEFAULT_LIST:
            return state.set('contentList',action.data).set('totalPage',action.totalPage);
        case constans.SET_MOUSEMOVE:
            return state.set('mouseIn',true);
        case constans.SET_MOUSEOUT:
            return state.set('mouseIn',false);
        case constans.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}