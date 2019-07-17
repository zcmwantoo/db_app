import styled, {keyframes} from 'styled-components';
import url from "../../static/logo.png";
import bgcUrl from '../../static/beta.png'
export const Head = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0;
    background-color: #fff;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 100;
`
export const Nav = styled.div`
    min-width:768px;
    max-width:1440px;
    margin:0 auto;
    color: #333;
    height:100%;
`
export const Logo = styled.a.attrs({
    href:"/"
})`
    display:block;
    float: left;
    width:100px;
    height: 56px;
    padding: 0;
    cursor: pointer;
    text-decoration: none;
    background:url(${url});
    background-size:contain;
`
export const Write = styled.a`
    float:right;
    width:100px;
    height:40px;
    cursor: pointer;
    text-align:center;
    line-height: 40px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 18px;
    color: #fff;
    background-color: #ea6f5a;
`
export const Sign = styled.a`
    float: right;
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 18px;
    color: #ea6f5a;
    background-color: transparent;
    cursor: pointer;
    text-align:center;
`
export const SignIn = styled.a`
    float: right;
    margin: 11px 6px 0 10px;
    font-size: 18px;
    color: #969696;
    font-weight: 400;
    text-align: center;
    height: 38px;
    line-height: 38px;
    cursor: pointer;
    vertical-align: middle;
`
export const NavCont = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    font-size:18px;
`
export const NavItem = styled.div`
    span{
        font-size:24px;
        vertical-align: middle;
    }
    margin-right:10px;
    width:100px;
    box-sizing:border-box;
    height:60px;
    line-height:56px;
    padding:0 15px;
    &.left{
        float:left;
        color:#333;
    }
    &.right{
        float:right;
        color:#969696;
        width:56px;
    }
    &.weight{
        font-weight:700;
    }
    &.bgc{
        background:url(${bgcUrl}) center no-repeat;
        background-size:contain;
    }
    
    cursor: pointer;
`
const openMove = keyframes`
    from{
        width: 140px;
    }
    to{
        width: 200px;
    }
`
const closeMove = keyframes`
    from{
        width: 200px;
    }
    to{
        width: 140px;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:140px;
    height:38px;
    border:none;
    outline:none;
    border-radius:20px;
    background: #eee;
    padding: 0 40px 0 20px;
    font-size: 14px;
    margin:9px;
    &::placeholder{
        color:#999;
    }
    &.bg-width {
        width:200px;
        animation: ${openMove} 0.5s;
    }
    &.bg-close {
        animation: ${closeMove} 0.5s;
    }
    
`
export const SearchBg = styled.div`
    float: left;
    position: relative;
    .iconfont{
        position: absolute;
        top: 16px;
        right: 15px;
        border-radius: 50%;
        background-color: transparent;
        text-align: center;
        padding: 5px;
    }
    .getfocus{
        background-color: #777;
        color: #fff;
    }
`