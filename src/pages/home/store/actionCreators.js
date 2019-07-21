import * as types from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable'
const firstContentList = (data) => {
    return {
        type:types.GET_ARTICLE_LIST,
        data:fromJS(data)
    }
}
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