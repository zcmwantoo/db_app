const defaultState = {
    focus:null  //搜索框焦点是否获取
}
export default (state = defaultState , action) => {
    switch(action.type) {
        case 'lose_focus':
            return {
                focus:false
            }
        case 'get_focus':
            return {
                focus:true
            }
        default:
            return state;
    }
}