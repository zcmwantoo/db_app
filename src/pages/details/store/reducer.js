import { fromJS } from 'immutable'
import { actionTypes } from './index'
const defaultState = fromJS({
    title:"",
    content:""
})
export default (state = defaultState , action) => {
    switch(action.type) {
        case actionTypes.GET_DETAILS:
            return state.set("title",action.title).set("content",action.content);
        default:
            return state;
    }
}