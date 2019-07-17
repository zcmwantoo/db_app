import React from 'react';
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
class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            focus:null
        }
    }
    getFocus = () => {
        this.setState({
            focus:true
        })
    }
    loseFocus = () => {
        this.setState({
            focus:false
        })
    }
    render() {
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
                                className={this.state.focus === null?'':(this.state.focus?'bg-width':'bg-close')}
                                onBlur = {() => { this.loseFocus() }}
                                onFocus = {() => { this.getFocus() }}
                            ></NavSearch>
                            <span className={`iconfont ${this.state.focus?'getfocus':''}`}>&#xe6a8;</span>
                        </SearchBg>
                    </NavCont>
                </Nav>
            </Head>
        )
    }
}
export default Header;