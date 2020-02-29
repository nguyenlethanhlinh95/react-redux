import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default App;
