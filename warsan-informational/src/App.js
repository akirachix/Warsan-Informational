import Product from './components/HowItWorks';

import React from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/Home';



function App() {
  return (
    <div className="App" data-testid="app-component">
      <HomePage/>
      <Product/>

    </div>
  );
}
export default App;                                                                                                         