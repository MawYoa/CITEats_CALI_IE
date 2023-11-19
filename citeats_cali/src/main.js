import React from 'react';


import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';


import './App.css'; 

function Main() {
  return (
    <div style={{ height: '100%' }}>
      
        <NavigationMenu />

        <Footer />
      
    </div>
  );
}

export default Main;
