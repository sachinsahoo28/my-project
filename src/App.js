import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainNews from './components/MainNews';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import TrendingAndFilters from './components/TrendingAndFilters';
import Admission2024 from './components/Admission2024';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="container mx-auto mt-4">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <TrendingAndFilters />
                  <div className="container mx-auto mt-8 flex flex-1">
                    <div className="w-2/3 pr-4">
                      <MainNews />
                    </div>
                    <div className="w-1/3">
                      <SideBar />
                    </div>
                  </div>
                </>
              } 
            />
            <Route path="/admission-2024" element={<Admission2024 />} />
          </Routes>
        </div>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

const ConditionalFooter = () => {
  const location = useLocation();
  return location.pathname !== '/admission-2024' ? <Footer /> : null;
};

export default App;
