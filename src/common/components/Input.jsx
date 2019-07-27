import React from 'react'
import { Ipt , IptVal } from './comStyle'
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveTop:false,
            value:""
        }
    }
    render() {
        return (
            <Ipt placeholder={this.props.placeholder} className={this.state.moveTop?"move":(this.state.value?"move":null)}>
                <IptVal
                    type={this.props.type}
                    value={this.state.value}
                    onChange={(e) => {this.valueChange(e)}}
                    onFocus={() =>{this.placeholderMove()}}
                    onBlur={() => {this.placeholderNoMove()}}
                    ref={this.props.innerRef}
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
    valueChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
}