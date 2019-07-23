// combineReducers对数据的拆分管理
import { combineReducers } from 'redux-immutable'
import {reducer as HeaderReducer} from '../common/header/store'
import { reducer as HomeReducer} from '../pages/home/store'
import {reducer as DetailsReducer} from '../pages/details/store'
// 将拆分的小的reducer整合成大的reducer
const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    details: DetailsReducer
})
export default reducer