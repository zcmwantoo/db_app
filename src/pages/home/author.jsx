import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {AuList ,Auul ,AuItem} from './style'
class Author extends React.PureComponent{
    componentDidMount(){
        this.props.getAuthors();
    }
    render() {
        console.log(this.props.authors.toJS())
        return (
            <AuList>
                <p>
                    <span>推荐作者</span>
                    <a><span className="iconfont">&#xe610;</span><span>换一批</span></a>
                </p>
                <Auul>
                    {this.props.authors.toJS().map((item) =>(
                        <AuItem key={item.id}>
                            <a className="img">
                                <img src={item.avatar_source}></img>
                            </a>
                            <a className="follow">+关注</a>
                            <a className="author">{item.nickname}</a>
                            <p className="cont">{`写了${item.total_wordage}字 · ${item.total_likes_count}喜欢`}</p>
                        </AuItem>
                    ))}
                </Auul>
            </AuList>
        )
    }
}
const mapState = (state) => {
    return {
        authors:state.getIn(["home","authorsList"])
    }
}
const mapDispatch = (dispatch) => {
    return {
        getAuthors(){
            dispatch(actionCreators.getAuthorsList())
        }
    }
}
export default connect(mapState,mapDispatch)(Author);