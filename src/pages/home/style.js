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
`
export const Title = styled.a`
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
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