import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from './components/News';

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num,
    status: state.status
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello 1234</h1>
        <News></News>
        {this.props.dulieu}
        {this.props.status ? 1: 0}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(App);