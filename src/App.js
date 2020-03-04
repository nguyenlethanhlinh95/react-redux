import React, { Component } from 'react';
import FormTodo from './components/formTodo';
import Table from './components/table';
import Sort from './components/Sort';
import Search from './components/Search';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [], // id: unique, name, status
      isDisplayForm: false,
      taskEditing: null
    };
  };

  componentWillMount(){
    if (localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  generateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'Hoc lap trinh',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Di hoc',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Ngu',
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    // add local storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  // get data form submit, update
  onSubmit = (data) => {
    let { tasks } = this.state;
    // check id === rong hay khong, neu bang rong la them moi, nguoc lai la cap nhat
    if (data.id ===''){
      // tao moi doi tuong
      data.id = this.generateID();
      tasks.push(data);
    } else{
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }
    // // add vao state, cap nhat tren local
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Toggle Form
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  // sinh id tu dong
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' 
    + this.s4() + '-' + + this.s4() + '-' + this.s4();
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    });
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm : true
    });
  }

  // cap nhat status table
  onUpdateStatus = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    if (index !== -1){
      tasks[index].status = !tasks[index].status;
      // cap nhat lai state
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // delete item
  onDelete = (id) => {
    let {tasks} = this.state;
    let index = this.findIndex(id);
    if (index !== -1){
      //xoa phan tu
      tasks.splice(index,1);
      // cap nhat lai state
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.onCloseForm();
    }
  }

  // update item
  onUpdate = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEditing= tasks[index]
    // console.log(taskEditing);
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
  }

  // tim ra phan tu khac id

  // tim chi so cua phan tu
  findIndex = (id) => {
    let rs = -1;
    let {tasks} = this.state;
    tasks.forEach((task, index)=>{
      if (task.id === id){
        return rs = index
      }
    });
    return rs;
  }

  render() {
    var { isDisplayForm, taskEditing } = this.state;
    let elmTaskForm = isDisplayForm ? 
    <FormTodo 
      task={taskEditing} 
      onSubmit={this.onSubmit} 
      onCloseForm={this.onCloseForm}>
      </FormTodo> : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""} >
              {elmTaskForm}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
            <button onClick={this.onToggleForm} type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button onClick={this.generateData} type="button" className="btn btn-info">
              <span className="fa fa-plus mr-5" />Generate data
            </button>
            <div className="row mgt-1">
              <Search></Search>
              <Sort></Sort>
            </div>
            <div className="row mgt-1">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Table tasks={this.state.tasks} 
                        onUpdateStatus={this.onUpdateStatus}
                        onDelete={this.onDelete}
                        onUpdate={this.onUpdate}
                        >
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

