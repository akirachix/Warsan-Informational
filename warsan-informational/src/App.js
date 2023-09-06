import React from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App" data-testid="app-component">
      <Layout>
        <HomePage/>
      </Layout>
    </div>
  );
}
export default App;                                                                                                         