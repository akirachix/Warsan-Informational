// Layout.js
import React from 'react';
import Navbar from './components/navbar'; 
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar /> {/* Navbar Component */}
      </header>
      <main>
        {/* Content inserted between Navbar and Footer */}
        {children}
      </main>
      <footer>
        <Footer /> {/* Footer Component */}
      </footer>
    </div>
  );
};

export default Layout;
