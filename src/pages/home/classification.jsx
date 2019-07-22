import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { ImgList , ItemA } from './style'

class ArcIficaton extends React.PureComponent{
    componentDidMount() {
        this.props.getImgList();
    }
    render() {
        return (
            <ImgList>
                {this.props.classImg.toJS().map((item) => (
                    <ItemA key={item}>
                        <img src={item}></img>
                    </ItemA>
                ))}
            </ImgList>
        )
    }
}
const mapState = (state) => {
    return {
        classImg:state.getIn(["home","imgList"])
    }
}
const mapDispatch = (dispatch) => {
    return {
        getImgList(){
            dispatch(actionCreators.getImgList())
        }
    }
}
export default connect(mapState,mapDispatch)(ArcIficaton);