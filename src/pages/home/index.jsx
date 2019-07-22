import React from 'react'
import { connect } from 'react-redux'
import {
    Box,
    Left,
    Right,
    BackTop
} from './style'
import Article from './article'
import ArcIficaton from './classification'
import Author from './author'
import { actionCreators } from './store'
class Home extends React.PureComponent{
    componentDidMount() {
        window.addEventListener("scroll",this.showOrHidden);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll",this.showOrHidden);
    }
    render() {
        return (
            <Box>
                <Left>
                    <Article></Article>
                </Left>
                <Right>
                    <ArcIficaton></ArcIficaton> 
                    <Author></Author>
                </Right>
                { this.props.backTopIsShow ? <BackTop onClick={this.scrollToTop}><span className="iconfont">&#xe631;</span></BackTop> : null}
                
            </Box>
        )
    }
    showOrHidden = () => {
        if(window.document.documentElement.scrollTop > 200) {
            this.props.backTopShow(true);
        }else{
            this.props.backTopShow(false);
        }
        
    }
    scrollToTop = () => {
        let timer = setInterval(function() {
            let scroll = window.document.documentElement.scrollTop;
            let speed = Math.ceil(scroll/6);
            if(scroll == 0) {
                clearInterval(timer);
            }
            window.document.documentElement.scrollTop = scroll - speed;
        },10)
    }
}
const mapState = (state) => {
    return {
        backTopIsShow:state.getIn(["home","backTopIsShow"])
    }
}
const mapDispatch = (dispatch) => {
    return {
        backTopShow(show) {
            dispatch(actionCreators.backTopShow(show))
        }
    }
}
export default connect(mapState,mapDispatch)(Home);