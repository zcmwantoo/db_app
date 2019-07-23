import React from 'react'
import { Box } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Details extends React.Component{
    componentDidMount() {
        this.props.getDetails(this.props.match.params.id)
    }
    render() {
        console.log(this.props.content)
        return (
            <Box>
                <h1>{this.props.title}</h1>
                <span dangerouslySetInnerHTML={{__html:this.props.content}}></span>
            </Box>
        )
    }
}
const mapState = (state) => ({
    title:state.getIn(["details","title"]),
    content:state.getIn(["details","content"])
})
const mapDispatch = (dispatch) => ({
    getDetails(id){
        const action = actionCreators.getDetailsAction(id);
        dispatch(action);
    }
})
export default connect(mapState,mapDispatch)(Details);