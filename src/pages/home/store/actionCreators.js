import * as types from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'
const firstContentList = (data) => {
    return {
        type:types.GET_ARTICLE_LIST,
        data:fromJS(data)
    }
}
// 派发板块分类到reducer
const defaultImgList = (data) => {
    return {
        type:types.GET_IMG_LIST,
        data:fromJS(data)
    }
}
// 获取首页文章列表
export const getArticlesList = () => {
    return (dispatch) => {
        axios.get('./api/homeArticle.json').then(
            (res)=>{
                const action = firstContentList(res.data.noteList);
                dispatch(action);
            }
        ).catch((err)=>console.log(err))    
    }
}
// 获取板块分类
export const getImgList = () => {
    return (dispatch) => {
        axios.get('./api/imgList.json').then(
            (res) => {
                dispatch(defaultImgList(res.data.imgList));
            }
        ).catch(err => console.log(err))
    }
}