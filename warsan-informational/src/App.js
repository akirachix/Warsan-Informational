import Product from './components/HowItWorks';

import React from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/Home';
import About from './components/AboutUs'



function App() {
  return (
    <div className="App" data-testid="app-component">
      <Layout>
      <HomePage/>
      <Product/>
      <About/>
      
      </Layout>

    </div>
  );
}
export default App;                                                                                                         