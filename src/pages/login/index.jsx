import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Box , Content , Sign } from './style'
import * as actionCreators from './store/actionCreators'
import {Input,Button} from '../../common/components'
import { Redirect } from 'react-router-dom'     //重定向

class Login extends PureComponent{
    render() {
        const {loginIn} = this.props;
        if(!loginIn) {
            return (
                <Box>
                    <Content>
                        <Input 
                            placeholder="用户名" 
                            innerRef={input => {this.user = input}}
                        />
                        <Input 
                            placeholder="密码" 
                            type="password" 
                            innerRef={input => {this.pass = input}}
                        />
                        <Sign>
                            <Button 
                                text="登录" 
                                type="primary" 
                                className="btn-left"
                                onClick={() => {this.props.loginInSystem(this.user,this.pass)}}
                            />
                            <Button text="注册" type="" className="btn-right"/>
                        </Sign> 
                    </Content> 
                </Box>
            )
        }else{
            return <Redirect to="/"/>
        }
        
    }
}
const mapState = (state) => {
    return {
        loginIn:state.getIn(["login","loginIn"])
    }
}
const mapDispatch = (dispatch) => {
    return {
        loginInSystem(user,pass){
            const action = actionCreators.loginSystem(user.value,pass.value);
            dispatch(action);
        }
    }
}
export default connect(mapState,mapDispatch)(Login)