import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import CampsiteDetailPage from './pages/CampsiteDetailPage.js';
import AboutPage from './pages/AboutPage.js';
import './App.css';
import { fetchCampsites } from './features/campsites/campsitesSlice.js';
import { fetchPartners } from './features/partners/partnersSlice.js';
import { fetchPromotions } from './features/promotions/promotionsSlice.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={<HomePage />} 
        />
        <Route 
          path='contact' 
          element={<ContactPage />} 
        />
        <Route 
          path='directory' 
          element={<CampsitesDirectoryPage />} 
        />
        <Route 
          path='directory/:campsiteId' 
          element={<CampsiteDetailPage />} 
        />
        <Route 
          path='about'
          element={<AboutPage />} 
        />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
