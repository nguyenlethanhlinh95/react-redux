import React, { Component } from 'react'

export default class colorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        };
    };
    // function show color
    showColor = (color) => {
        return {
            backgroundColor: color
        }
    }
    setActiveColor = (color) => {
        this.props.onReceiveColor(color);
    }

    render() {
        // use map show colors
        let colors = this.state.colors.map((color, index) => {
            return <span 
                        key={index} 
                        className={this.props.color === color? 'active': ''}
                        style={this.showColor(color)}
                        onClick={()=>this.setActiveColor(color)}
                        >
                    </span>
        });
        return (
            <div className="panel panel-default text-center">
                <div className="panel-heading">
                    <h3 className="panel-title">Color picker</h3>
                </div>
                <div className="panel-body">
                    {colors}
                </div>
            </div>
        )
    }
}
