import { fromJS } from 'immutable'
import { actionTypes } from './index'
const defaultState = fromJS({
    noteList:[]
})
export default (state = defaultState , action) => {
    switch(action.type) {
        case actionTypes.GET_ARTICLE_LIST:
            return state.set("noteList",action.data);
        default:
            return state;
    }
}