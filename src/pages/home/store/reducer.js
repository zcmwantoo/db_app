import { fromJS } from 'immutable'
import { actionTypes } from './index'
const defaultState = fromJS({
    noteList:[],                //文章列表
    imgList:[] ,                //板块分类
    authorsList:[] ,            //作者列表
    backTopIsShow:false         //返回顶部
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
        case actionTypes.SET_BACKTOP_SHOW:
            return state.set("backTopIsShow",action.show);
        default:
            return state;
    }
}