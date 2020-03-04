import React, { Component } from 'react'

export default class table extends Component {
  onUpdateStatus = (id) => {
    this.props.onUpdateStatus(id);
  }

  onDelete = (id) => {
    this.props.onDelete(id);
  }

  onUpdate = (id) => {
    this.props.onUpdate(id);
  }

    render() {
        var tasks = this.props.tasks;
        var elements = tasks.map((item, index)=>{
                return <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td className="text-center">
                        {/* <span className="label label-success">
                            Kích Hoạt
                        </span> */}
                        <span onClick={()=>this.onUpdateStatus(item.id)} className={ item.status === true ? 'label label-danger' : 'label label-success'}>
                           {item.status === true ? 'Kích Hoạt' : 'Tạm khóa'}  
                        </span>
                        </td>
                        <td className="text-center">
                        <button onClick={()=>this.onUpdate(item.id)} type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5" />Sửa
                        </button>
                        &nbsp;
                        <button onClick={()=>this.onDelete(item.id)} type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5" />Xóa
                        </button>
                        </td>
                    </tr>
        });

        return (
            <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <select className="form-control">
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    {elements}
                  </tbody>
                </table>
        )
    }
}
