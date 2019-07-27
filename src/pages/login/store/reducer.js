import { fromJS } from 'immutable'
import * as actionTypes from './actionType'
const defaultState = fromJS({
    loginIn: false
})

export default (state = defaultState,action) => {
    switch(action.type) {
        // 退出登录
        case actionTypes.GO_LOGINOUT:
            return state.set("loginIn",false);
        // 登录
        case actionTypes.LOGIN_SYSTEM:
            return state.set("loginIn",true);
        default:
            return state;
    }
}