import React from 'react'
import { connect } from 'react-redux'
import {
    NoteList,
    Item,
    Title,
    Content,
    Abstract
} from './style'
import { actionCreators } from './store'
class Article extends React.Component{
    componentDidMount(){
        const { getList } = this.props;
        getList();
    }
    render() {
        const { noteList } = this.props;
        return (
            <div>
                <NoteList>
                    {noteList.toJS().map((item,index) => {
                        return (
                            <Item key={index}>
                                {item.imgUrl?<a className="img-content"><img alt="" className="img-true" src={item.imgUrl}></img></a>:""}
                                <Content className={item.imgUrl?"have-img":""}>
                                    <Title>{item.title}</Title>
                                    <Abstract>{item.content}</Abstract>
                                </Content>
                            </Item>
                        )
                    })}
                </NoteList>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        noteList:state.get('home').get('noteList')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getList(){
            const action = actionCreators.getArticlesList();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Article);