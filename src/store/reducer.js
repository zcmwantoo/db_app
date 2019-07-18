// combineReducers对数据的拆分管理
import { combineReducers } from 'redux-immutable'
import {reducer as HeaderReducer} from '../common/header/store'
// 将拆分的小的reducer整合成大的reducer
const reducer = combineReducers({
    header: HeaderReducer
})
export default reducer