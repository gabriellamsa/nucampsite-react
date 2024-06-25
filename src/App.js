import React from 'react';
import './App.css';
import Header from './components/Header.js';
import CampsitesList from './features/campsites/CampsitesList.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
