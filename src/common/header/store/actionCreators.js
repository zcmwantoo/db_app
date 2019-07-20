import * as constans from './constans';
import axios from 'axios';
import { fromJS } from 'immutable'
export const loseFocusAction = () => {
    return {
        type:constans.LOSE_FOCUS
    }
}
export const getFocusAction = () => {
    return {
        type:constans.GET_FOCUS
    }
}
// 初始化搜索框推荐内容
const getDefaultList = (data) => ({
    type:constans.GET_DEFAULT_LIST,
    // immutable接收的对象必须是immutable对象，所以要转换
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const getList = () => {
    // redux-thunk,可以派发函数，异步请求
    return (dispatch) => {
        axios.get('./api/headerList.json').then(
            (res) => {
                const action = getDefaultList(res.data.list);
                dispatch(action);
            }
        ).catch(
            (err) => {
                console.log(err);
        })
    }
}
// 鼠标划入
export const mouseMove = () => ({
    type:constans.SET_MOUSEMOVE
})
// 鼠标划出
export const mouseOut = () => ({
    type:constans.SET_MOUSEOUT
})
// 改变list页码
export const changePage = (page) => ({
    type:constans.CHANGE_PAGE,
    page
})