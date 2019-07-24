import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Box , Content , Sign } from './style'
import * as actionCreators from './store/actionCreators'
import {Input,Button} from '../../common/components'

class Login extends PureComponent{
    render() {
        return (
            <Box>
                <Content>
                    <Input placeholder="用户名" value={this.props.name} onChange={(e) => {this.props.changeName(e)}}/>
                    <Input placeholder="密码" value={this.props.pass} onChange={(e) => {this.props.changePass(e)}}/>
                    <Sign>
                        <Button text="登录" type="primary" className="btn-left"/>
                        <Button text="注册" type="" className="btn-right"/>
                    </Sign> 
                </Content> 
            </Box>
        )
    }
}
const mapState = (state) => {
    return {
        name:state.getIn(["login","name"]),
        pass:state.getIn(["login","pass"])
    }
}
const mapDispatch = (dispatch) => {
    return {
        changeName(e){
            dispatch(actionCreators.nameChange(e.target.value))
        },
        changePass(e){
            dispatch(actionCreators.passChange(e.target.value))
        }
    }
}
export default connect(mapState,mapDispatch)(Login)