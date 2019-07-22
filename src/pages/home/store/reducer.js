import { fromJS } from 'immutable'
import { actionTypes } from './index'
const defaultState = fromJS({
    noteList:[],                //文章列表
    imgList:[] ,                //板块分类
    authorsList:[]              //作者列表
})
export default (state = defaultState , action) => {
    switch(action.type) {
        case actionTypes.GET_ARTICLE_LIST:
            return state.set("noteList",action.data);
        case actionTypes.GET_IMG_LIST:
            return state.set("imgList",action.data);
        case actionTypes.GET_AUTHORS:
            return state.set("authorsList",action.data);
        case actionTypes.GET_MANY_LIST:
            // console.log(action.data,)
            return state.set("noteList",fromJS(state.get("noteList").toJS().concat(action.data)));
        default:
            return state;
    }
}