import React, { Component } from 'react';
import Button from '../../../reset';
import Result from '../../../result';
import ColorPicker from '../../../colorPicker';
import SizeSetting from '../../../sizeSetting';

export default class index extends Component {
    render() {
        return (
            <div className="mgt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ColorPicker></ColorPicker>
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
                            <Result></Result>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}