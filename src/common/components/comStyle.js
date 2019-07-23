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
    }
    .rippleEffect {
        animation: ${rippleDrop} .6s linear;
}
`
