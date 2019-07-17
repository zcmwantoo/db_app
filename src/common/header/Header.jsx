import React from 'react';
import { connect } from 'react-redux'
import {
    Head,
    Nav,
    Logo,
    Write,
    Sign,
    SignIn,
    NavCont,
    NavItem,
    NavSearch,
    SearchBg
} from './style';
// 无状态头部组件
const Header = (props) => {
    return (
        <Head>
            <Nav>
                <Logo></Logo>
                <Write><span className="iconfont">&#xe6a4;</span>写文章</Write>
                <Sign>注册</Sign>
                <SignIn>登录</SignIn>
                <NavCont>
                    <NavItem className="left toIndex"><span className="iconfont">&#xe60c;</span>首页</NavItem>
                    <NavItem className="left">下载<span className="iconfont">&#xe626;</span></NavItem>
                    <NavItem className="right bgc"></NavItem>
                    <NavItem className="right weight"><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchBg>
                        <NavSearch
                            className={props.focus === null?'':(props.focus?'bg-width':'bg-close')}
                            onBlur = {props.loseFocus}
                            onFocus = {props.getFocus}
                        ></NavSearch>
                        <span className={`iconfont ${props.focus?'getfocus':''}`}>&#xe6a8;</span>
                    </SearchBg>
                </NavCont>
            </Nav>
        </Head>
    )
}
const mapStateToProps = (state) => {
    return {
        focus : state.header.focus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loseFocus() {
            const action = {
                type:'lose_focus'
            }
            dispatch(action);
        },
        getFocus() {
            const action = {
                type:'get_focus'
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);