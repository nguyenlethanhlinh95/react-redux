import React, { Component } from 'react'

export default class product extends Component {
    render() {
        return (
            <div className="col col-4">
                <div className="thumbnail">
                    <img src="https://phuckhangmobile.com/file/iphone-x-xam-11-15865f.jpg" alt="" />
                </div>
                <div className="caption">
                    <h3>Iphone X</h3>
                    <p>16.000.000</p>
                </div>
            </div>
        )
    }
}
