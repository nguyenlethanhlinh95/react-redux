import React, { Component } from 'react';
import FormTodo from './components/formTodo';
import Search from './components/search';
import Sort from './components/sort';
import Table from './components/table';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [], // id: unique, name, status
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
        id: 1,
        name: 'Hoc lap trinh',
        status: true
      },
      {
        id: 2,
        name: 'Di hoc',
        status: true
      },
      {
        id: 3,
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

  render() {
    console.log("render");
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <FormTodo></FormTodo>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button onClick={this.generateData} type="button" className="btn btn-info">
              <span className="fa fa-plus mr-5" />Generate data
            </button>
            <div className="row mgt-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Search></Search>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Sort></Sort>
              </div>
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

