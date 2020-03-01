import React, { Component } from 'react'

export default class formTodo extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        status: false
      };
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input onChange={this.onChange} value={this.state.name} name="name" type="text" className="form-control" />
                  </div>
                  <label>Trạng Thái :</label>
                  <select onChange={this.onChange} value={this.state.status} name="status" className="form-control" required="required">
                    <option value={true}>Kích Hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                    <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}
