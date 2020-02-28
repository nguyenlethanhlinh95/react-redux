import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="container">
        <div className="row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

export default App;
