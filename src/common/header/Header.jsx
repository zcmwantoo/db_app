import React from 'react';
import { connect } from 'react-redux';
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
    SearchBg,
    SearchInfo,
    InfoTitle,
    InfoContentList,
    ListItem,
    SearchTips
} from './style';
import  {actionCreators} from './store';
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
                        <span className={`iconfont search ${props.focus?'getfocus':''}`}>&#xe6a8;</span>
                        <SearchInfo
                            className={props.focus?"":"hidden"}
                        >
                            <InfoTitle>
                                <span>热门搜索</span>
                                <a><span className="iconfont">&#xe610;换一批</span></a>
                            </InfoTitle>
                            <InfoContentList>
                                {props.contentList.map((item) => {
                                    return  <ListItem key={item}>
                                                <a>{item}</a>
                                            </ListItem>
                                })}
                            </InfoContentList>
                            <SearchTips>
                                <ul>
                                    <li><a><span className="iconfont history">&#xe6be;</span><span className="font">react</span></a></li>
                                    <li><a><span className="iconfont history">&#xe6be;</span><span className="font">styled-components</span></a></li>
                                </ul>
                            </SearchTips>
                        </SearchInfo>
                    </SearchBg>
                </NavCont>
            </Nav>
        </Head>
    )
}
const mapStateToProps = (state) => {
    return {
        focus : state.get('header').get('focus'),
        contentList : state.get('header').get('contentList')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loseFocus() {
            const action = actionCreators.loseFocusAction();
            dispatch(action);
        },
        getFocus() {
            const action = actionCreators.getFocusAction();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);