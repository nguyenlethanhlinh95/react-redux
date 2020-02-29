import React, { Component } from 'react';
import Button from '../../../reset';
import Result from '../../../result';
import ColorPicker from '../../../colorPicker';
import SizeSetting from '../../../sizeSetting';

export default class index extends Component {
    constructor(props){
        super(props);
        // state set color, fontSize default
        this.state = {
            color: 'red',
            fontSize: 15
        };
    };

    // nhan value tu component, cap nhat data
    onSetColor = (params) => {
        this.setState({
            color: params
        })
    }

    render() {
        return (
            <div className="mgt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}></ColorPicker>
                        </div>
                        <div className="col-lg-6">
                            <SizeSetting></SizeSetting>
                        </div>
                        <div className="row">
                            <div className="col-lg12 text-center">
                                <Button></Button>
                            </div>
                        </div>
                        <div className="row">
                            <Result color={this.state.color}></Result>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}