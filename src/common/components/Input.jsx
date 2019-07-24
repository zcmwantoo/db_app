import React from 'react'
import { Ipt , IptVal } from './comStyle'
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveTop:false
        }
    }
    render() {
        return (
            <Ipt placeholder={this.props.placeholder} className={this.state.moveTop?"move":(this.props.value?"move":null)}>
                <IptVal
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onFocus={() =>{this.placeholderMove()}}
                    onBlur={() => {this.placeholderNoMove()}}
                />
            </Ipt>
        )
    }
    placeholderMove = () =>{
        this.setState({
            moveTop:true
        })
    }
    placeholderNoMove = () =>{
        this.setState({
            moveTop:false
        })
    }
}