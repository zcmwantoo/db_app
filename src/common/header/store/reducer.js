import * as constans from './constans'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focus:null,  //搜索框焦点是否获取
    contentList:['手帐','书法','PPT','穿搭','打碗碗花','简书','姥姥的澎湖湾','设计','创业','交友']
})
export default (state = defaultState , action) => {
    switch(action.type) {
        case constans.LOSE_FOCUS:
            return state.set('focus',false);
        case constans.GET_FOCUS:
            return state.set('focus',true);
        default:
            return state;
    }
}