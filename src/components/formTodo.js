import React, { Component } from 'react'

export default class formTodo extends Component {
    constructor(props){
      super(props);
      this.state = {
        id: '',
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
      let data = {
        id: '',
        name: this.state.name, 
        status:  this.state.status === 'true' ? true:false
      }
      this.props.onSubmit(data);

      // Cancel & Close Form
      this.onClear();
      this.onCloseForm();
    }

    // clear form
    onClear = () => {
      this.setState({
        name: '',
        status: false
      });
    }

    onCloseForm = () => {
      this.props.onCloseForm();
    }

    //get data editing
    componentWillMount(){
      if (this.props.task){
        this.setState({
          id: this.props.task.id,
          name: this.props.task.name,
          status: this.props.task.status,
        });
      }
    }

    componentWillReceiveProps(nextProps){
      if (nextProps && nextProps.task){
        this.setState({
          id: nextProps.task.id,
          name: nextProps.task.name,
          status: nextProps.task.status,
        });
      }else if(!nextProps.task){
        this.setState({
          id: '',
          name: '',
          status: false
        });
      }
    }
    // change status form 
    render() {
      let {id} = this.state;
        return (
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title"> {id !== '' ? 'Cập nhật công việc': 'Thêm công việc'} <span className="close" onClick={this.onCloseForm}><i className="fa fa-times-circle" aria-hidden="true"></i>
</span></h3>
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
                    <button onClick={this.onClear} type="submit" className="btn btn-danger">Hủy Bỏ</button>
                  </div>
                </form>
              </div>
            </div>
        )
    }
}
