import styled from 'styled-components'

export const Box = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #F1F1F1;
`
export const Content = styled.div`
    width: 400px;
    position:absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%,-50%); 
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
`
export const Sign = styled.div`
    margin-top: 20px;
    .btn-left{
        float: left;
        width: 40%;
    }
    .btn-right{
        float: right;
        width: 40%;
    }
`