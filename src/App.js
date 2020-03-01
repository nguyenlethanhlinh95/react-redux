import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from './components/News';

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello 1234</h1>
        <News></News>
        {this.props.dulieu}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(App);