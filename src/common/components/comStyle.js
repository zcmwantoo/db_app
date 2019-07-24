import styled,{keyframes} from 'styled-components';

const rippleDrop = keyframes`
    100% {
    transform: scale(2); 
    opacity: 0;
  }
`
export const Btn = styled.button`
    border: none;
    outline: none;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 20px;
    position: relative;
    overflow: hidden;
    &.block{
        width: 100%;
    }
    &.fillet{
        border-radius: 20px;
    }
    &.primary{
        background-color: #1890FF;
        color: #fff;
    }
    &.danger{
        background-color: #FF4D4F;
        color: #fff;
    }
    &.success{
        background-color: #52c41a;
        color: #fff;
    }
    &.warning{
        background-color: #faad14;
        color: #fff;
    }
    &.dark{
        background-color: #9B9B9B;
        color: #fff;
    }
    .ripple {
        position: absolute; 
        border-radius: 50% 50%; 
        background: rgba(255, 255, 255, 0.4);  
        transform: scale(0); 
        opacity: 1; 
        top: 0;
        left: 0;  
    }
    .rippleEffect {
        position: absolute; 
        animation: ${rippleDrop} .6s linear;
}
`
// input
export const Ipt = styled.div`
    width: 100%;  
    position: relative;
    &::after{
        content: attr(placeholder);
        position: absolute;
        bottom: 0;
        left: 10px;
        font-size: 14px;
        transition: .3s;
    }
    &.move::after{
        bottom: 30px;
        font-size: 10px;
        transition: .3s;
    }
    border-bottom: 1px solid #c8c8c8;

`
export const IptVal = styled.input`
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: 30px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    font-size: 14px;
    outline: none;
    border: none;
`
