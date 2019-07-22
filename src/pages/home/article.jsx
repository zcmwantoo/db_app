import React from 'react'
import { connect } from 'react-redux'
import {
    NoteList,
    Item,
    Content,
    Abstract,
    AddManyList,
    ToLink
} from './style'
import {Link} from 'react-router-dom'
import { actionCreators } from './store'
class Article extends React.PureComponent{
    componentDidMount(){
        const { getList } = this.props;
        getList();
    }
    render() {
        const { noteList ,getNextList } = this.props;
        return (
            <div>
                <ToLink>
                    <img src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                </ToLink>
                <NoteList>
                    {noteList.toJS().map((item,index) => {
                        return (
                            <Item key={index}>
                                {item.imgUrl?<a className="img-content"><img alt="" className="img-true" src={item.imgUrl}></img></a>:""}
                                <Content className={item.imgUrl?"have-img":""}>
                                    <Link to="/details" className="to-details">
                                        {item.title}
                                    </Link>
                                    <Abstract>{item.content}</Abstract>
                                </Content>
                            </Item>
                        )
                    })}
                </NoteList>
                <AddManyList
                    onClick={getNextList}
                >阅读更多</AddManyList>
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
        },
        getNextList() {
            const action = actionCreators.getNextArticleList();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Article);