import React, { Component } from 'react'

export default class sizeSetting extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Size 15px</h3>
                </div>
                <div className="panel-body">
                    <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-primary mgr-1">Up</button>
                        <button type="button" className="btn btn-info">Down</button>
                    </div>
                </div>
            </div>
        )
    }
}
