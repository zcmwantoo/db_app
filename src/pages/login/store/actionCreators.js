import * as actionTypes from './actionType'
import axios from 'axios'
// 退出登录
export const dropOut = () => {
    return {
        type:actionTypes.GO_LOGINOUT,
    }
}
// 登录
const loginSys = () => {
    return {
        type:actionTypes.LOGIN_SYSTEM
    }
}
export const loginSystem = (user,pass) => {
    return (dispatch) => {
        axios.get("./api/login.json").then(
            (res) => {
                if(res.data.login) {
                    dispatch(loginSys())
                }else{
                    alert("用户名或密码错误");
                }
                
            }
        ).catch(err => console.log(err));
    }
}