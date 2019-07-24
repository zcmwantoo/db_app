import { fromJS } from 'immutable'
import * as actionTypes from './actionType'
const defaultState = fromJS({
    name:'',
    pass:''
})

export default (state = defaultState,action) => {
    switch(action.type) {
        case actionTypes.NAME_CHANGE:
            return state.set("name",action.name);
        case actionTypes.PASS_CHANGE:
            return state.set("pass",action.pass);
        default:
            return state;
    }
}