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
        /* vertical-align: middle; */
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
        width: 200px;
    }
    to{
        width: 260px;
    }
`
const closeMove = keyframes`
    from{
        width: 260px;
    }
    to{
        width: 200px;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:200px;
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
        width:260px;
        animation: ${openMove} 0.5s;
    }
    &.bg-close {
        animation: ${closeMove} 0.5s;
    }
    
`
export const SearchBg = styled.div`
    float: left;
    position: relative;
    .search{
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
// 搜索框组件
export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 8px;
    width:250px;
    /* height: 200px; */
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    box-sizing: border-box;
    &::before{
        content: "";
        left: 27px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        top: -5px;
        z-index: -1;
        position: absolute;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0,0,0,.2);
        box-sizing: border-box;
    }
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: #fff;
        left: 20px;
        bottom: 99%;
        box-sizing: border-box;
    }
`
export const InfoTitle = styled.div`
    color: #969696;
    justify-content: bottom;
    margin-bottom:20px;
    height: 20px;
    line-height: 20px;
    padding: 20px 20px 10px;
    span{
        font-size: 14px; 
    }
    a{
        font-size: 13px;
        float: right;
        cursor: pointer;
    }
    a:hover{
        color: #2f2f2f;
    }
    .skin{
        display: block;
        float: left;
        transition: all 0.3s ease-in;
    }
`
export const InfoContentList = styled.div`
    padding: 0 20px 10px 20px;
    font-size: 12px;
    color: #787878;
    border-bottom: 1px solid #f0f0f0;
`
export const ListItem = styled.div`
    margin-right: 10px;
    line-height: 28px;
    display:inline-block;
    margin-bottom: 10px;
    a{
        cursor: pointer;
        padding: 2px 6px;
        font-size: 12px;
        color: #787878;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    a:hover{
        color: #333;
        border: 1px solid #b4b4b4;
    }
`
export const SearchTips = styled.div`
    padding: 5px;
    ul,li{
        list-style: none;
    }
    a{
        display: block;
        height: 40px;
        line-height: 20px;
        padding: 10px 15px;
        font-size: 14px;
        color: #333;
        position: relative;
        box-sizing:border-box;
        cursor: pointer;
    }
    a:hover{
        background-color: #f0f0f0;
        border-radius: 4px;
    }
    .history{
        margin-right: 10px;
        font-size: 18px;
        color: #787878;
        float: left;
    }
    .font{
        vertical-align: middle;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 30px;
        color:#787878;
    }
`