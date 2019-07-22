import React from 'react'
import {
    Box,
    Left,
    Right
} from './style'
import Article from './article'
import ArcIficaton from './classification'
import Author from './author'
class Home extends React.Component{
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
            </Box>
        )
    }
}
export default Home;