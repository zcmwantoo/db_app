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
import { Link } from 'react-router-dom'
import  {actionCreators} from './store';
// 无状态头部组件
class Header extends React.PureComponent{
    render() {
        const {focus,loseFocus,getFocus,mouseIn,contentList} = this.props;
        return (
            <Head>
                <Nav>
                    <Link to="/">
                        <Logo/>
                    </Link>
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
                                className={focus === null?'':(focus?'bg-width':'bg-close')}
                                onBlur = {loseFocus}
                                onFocus = {() => {getFocus(contentList)}}
                            ></NavSearch>
                            <span className={`iconfont search ${focus?'getfocus':''}`}>&#xe6a8;</span>
                            {mouseIn||focus?this.searchInfo():''}
                        </SearchBg>
                    </NavCont>
                </Nav>
            </Head>
        ) 
    }
    searchInfo = () => {
        const {contentList,searchShow,searchHidden,page,totalPage,changeList} = this.props;
        const jsList = contentList.toJS();
        const newList = [] ;
        if(jsList.length) {
            for ( let i = ( page -1 ) * 10 ; i < page * 10 ; i ++ ) {
                if(jsList[i]) {
                    newList.push(
                        <ListItem key={jsList[i]}>
                            <a>{jsList[i]}</a>
                        </ListItem>
                    );
                }   
            }
        }
        return (
            <SearchInfo
                onMouseEnter = {searchShow}
                onMouseLeave = {searchHidden}
            >
                <InfoTitle>
                    <span>热门搜索</span>
                    <a
                        onClick = { () => {changeList(page,totalPage,this.refs.changeOrigin) }}
                    ><span className="iconfont skin" ref="changeOrigin">&#xe610;</span><span>换一批</span></a>
                </InfoTitle>
                <InfoContentList>
                   {newList}
                </InfoContentList>
                <SearchTips>
                    <ul>
                        <li><a><span className="iconfont history">&#xe6be;</span><span className="font">react</span></a></li>
                        <li><a><span className="iconfont history">&#xe6be;</span><span className="font">styled-components</span></a></li>
                    </ul>
                </SearchTips>
            </SearchInfo>
        )
    }
} 
    

// 

const mapStateToProps = (state) => {
    return {
        focus : state.get('header').get('focus'),
        contentList : state.get('header').get('contentList'),
        mouseIn : state.get('header').get('mouseIn'),
        page : state.get('header').get('page'),
        totalPage : state.get('header').get('totalPage')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loseFocus() {
            const action = actionCreators.loseFocusAction();
            dispatch(action);
        },
        // 获取焦点
        getFocus(contentList) {
            !contentList.size && dispatch(actionCreators.getList());
            const action = actionCreators.getFocusAction();
            dispatch(action);
        },
        // 鼠标划入searchInfo
        searchShow() {
            dispatch(actionCreators.mouseMove())
        },
        // 鼠标划出
        searchHidden() {
            dispatch(actionCreators.mouseOut())
        },
        // 切换列表
        changeList(page,totalPage,skin) {
            let thisOrigin = skin.style.transform.replace(/[^0-9]/ig, "");
            if(thisOrigin) {
                skin.style.transform = `rotate(${parseInt(thisOrigin)+360}deg)`;
            }else{
                skin.style.transform = 'rotate(360deg)';
            }
            // 
            let newPage = page < totalPage ? ( page + 1 ) : 1;
            dispatch(actionCreators.changePage(newPage));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);