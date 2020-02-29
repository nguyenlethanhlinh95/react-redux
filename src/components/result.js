import React, { Component } from 'react'

export default class result extends Component {
    setColor = () => {
        return {
            color: this.props.color,
            borderColor: this.props.color
        }
    }
    render() {
        return (
            <div className="col-lg12 text-center">
                <p className="mgt-2">Color: {this.props.color} - Font-size: {this.props.fontSize}px</p>

                <div className="grid-content" style={this.setColor()}>
                    <p >Noi dung settings</p>
                </div>
            </div>
        )
    }
}
