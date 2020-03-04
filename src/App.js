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

  // get data form submit
  onSubmit = (name,status) => {
    // tao moi doi tuong
    var task = {
      id: this.generateID(),
      name: name,
      status: status
    }
    // add vao state, cap nhat tren local
    var {tasks} = this.state;
    tasks.push(task);
    this.setState({
      tasks: tasks
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
      isDisplayForm : !this.state.isDisplayForm
    });
  }

  render() {
    var { isDisplayForm } = this.state;
    let elmTaskForm = isDisplayForm ? <FormTodo onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}></FormTodo> : ''
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
                <Table tasks={this.state.tasks}></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

