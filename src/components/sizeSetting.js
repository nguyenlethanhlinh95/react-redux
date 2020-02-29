import React, { Component } from 'react'

export default class sizeSetting extends Component {
    changeFontSize = (param) => {
        if (param === 1)
        {
            this.props.changeFontSize(1)
        }
        else
        {
            this.props.changeFontSize(0)
        }
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Size {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group" role="group" aria-label="...">
                        <button onClick={()=>this.changeFontSize(1)} type="button" className="btn btn-primary mgr-1">Up</button>
                        <button onClick={()=>this.changeFontSize(0)} type="button" className="btn btn-info">Down</button>
                    </div>
                </div>
            </div>
        )
    }
}
