import React from 'react'
import {Btn} from './comStyle'
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            startTransform: false
        }
    }
    render() {
        return (
            <Btn 
                className={`${this.props.type} ${this.props.block?"block":""} ${this.props.fillet?"fillet":""}`}
                onClick={this.props.onClick}
                onMouseEnter={(e) => {this.animate(e,this.refs.btnPosition,this.refs.circleDom)}}
                onMouseLeave={() => {this.endAnimate()}}
                ref="btnPosition"
            >
                {this.props.text}
                <div className={this.state.startTransform?"ripple rippleEffect":"ripple"} ref="circleDom"></div>
            </Btn>
        )
    }
    animate=(e,dom,circleDom) => {
        this.setState({
            startTransform:true
        })
        let domMarginTop = dom.offsetTop;
        let domMarginLeft = dom.offsetLeft;

        let domHeight = dom.offsetHeight;
        let domWidth = dom.offsetWidth;

        let circleWidth = domHeight > domWidth ? domHeight : domWidth;

        let mouseMarginTop = e.pageY;
        let mouseMarginLeft = e.pageX;

        let circleX = mouseMarginLeft - domMarginLeft - circleWidth / 2 ;
        let circleY = mouseMarginTop - domMarginTop - circleWidth / 2 ;
        
        circleDom.style.width=circleWidth+"px";
        circleDom.style.height=circleWidth+"px";
        circleDom.style.top=circleY+"px";
        circleDom.style.left=circleX+"px";
        
        
    }
    endAnimate=() => {
        this.setState({
            startTransform:false
        })
    }
}
export default Button