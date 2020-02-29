import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      gender: 0
    };
  };
  handlerChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });

  }
  handlerSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.username + ' ' + this.state.password + this.state.gender);
  }
  render() {
    return (
      <div className="container mgt-5">
      <div className="row">
        <div className="col-lg-8 col-pull-left-2">
          <h2 className="title">Form example</h2>
          <form onSubmit={this.handlerSubmit}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Username</label>
              <input onChange={this.handlerChange} type="text" name="username" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Password</label>
              <input onChange={this.handlerChange} type="password" name="password" className="form-control" id="exampleFormControlInput1"  />
            </div>

            <div className="col-auto my-1">
            <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Preference</label>
            <select onChange={this.handlerChange} name="gender" value ={this.state.gender}  className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </select>
          </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-info">Reset</button>
        </form>
        </div>
      </div>
    </div>
    )
  }
}
