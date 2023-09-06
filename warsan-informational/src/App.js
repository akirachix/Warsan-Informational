import React from 'react';
import './App.css';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App" data-testid="app-component">
      <Layout>
        <AboutUs/>

      </Layout>
    </div>
  );
}
export default App;                                                                                                         