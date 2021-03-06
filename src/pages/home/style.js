import styled from 'styled-components'

export const Box = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`
export const Left = styled.div`
    box-sizing: border-box;
    width: 620px;
    float: left;
    padding: 30px 15px;
`
export const Right = styled.div`
    box-sizing: border-box;
    width: 280px;
    float: right;
    padding: 30px 0;
`
/**
 * article部分
 */
export const ToLink = styled.a.attrs({
    target: '_blank',
    href: 'https://www.jianshu.com/p/a37929ad1994?utm_medium=index-banner&utm_source=desktop'
})`
    display: block;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 20px;
    img{
        width: 100%;
    }
`
export const NoteList = styled.ul`
    list-style: none;
`
export const Item = styled.li`
    list-style: none;
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    line-height: 20px;
    .img-content{
        width: 150px;
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        height: 100px;
        cursor: pointer;
    }
    .img-true{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        vertical-align: middle;
    }
`
export const Content = styled.div`
    &.have-img{
        padding-right: 165px;
    }
    .to-details{
        text-decoration: none;
        color: #2f2f2f;
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        cursor: pointer;
    }
    .to-details:hover{
        text-decoration: underline;
    }
`
export const Abstract = styled.p`
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
`
 /**
  * classification部分
  */
 export const ImgList = styled.div`
    padding-bottom: 15px;
 `
 export const ItemA = styled.a`
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    margin-bottom: 10px;
    img{
        border-radius: 5px;
        width: 100%;
        min-height: 50px;
        vertical-align: middle;
    }
 `
/**
 * author部分
 */
export const AuList = styled.div`
    margin-bottom: 20px;
    p{
        color:#969696;
        font-size: 14px;
        a{
            cursor: pointer;
            float: right;
        }
    }
`
export const Auul = styled.ul`
    margin-bottom: 20px;
    list-style: none;
`
export const AuItem = styled.li`
    margin-top: 15px;
    overflow: hidden;
    a.img{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        cursor: pointer;
        display: block;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    a.follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }
    a.author{
        padding-top: 8px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        cursor: pointer;
        color: #333;
    }
    p.cont{
        margin-top: 8px;
        font-size: 12px;
        color: #969696;
    }
`
// 回到顶部
export const BackTop = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1010;
    width: 50px;
    height: 50px;
    background: inherit;
    border: 1px solid #dcdcdc;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    &:hover{
        background: hsla(0,0%,71%,.1);
    }
`
